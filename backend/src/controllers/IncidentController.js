const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        // contar o total de incidentes (count[0] === [count])
        const [count] = await connection('incidents').count();

        res.header('X-Total-Count', count['count(*)'])

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // pegar os dados da ong pelo incidente
            .limit(5) // limitar os dados de busca para 5 registros
            .offset((page - 1) * 5) // pular de 5 em 5 por pagina
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.state'
            ]);
  
        return res.json(incidents);
    },

    async store(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return res.json({ id })
    },

    async destroy(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        //if (ong_id == 'undefined') res.status(410).json({ error: 'the resource requested is no longer available and will not be available again' });

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id) res.status(401).json({ error: 'Operation not permited.' });

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    }
}