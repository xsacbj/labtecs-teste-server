const db = require('../database/connection');
const priorities = ['Não Urgência', 'Pouca Urgência', 'Urgência Média', 'Urgência Alta', 'Emergência']

module.exports = {

  async index(req, res){
    const { cpf='' } = req.query;

    const patients_history = await db
    .select('*')
    .where('cpf', 'like', `%${cpf}%`)
    .from('patient_history');

    return res.json(patients_history);
  },

  async create(req, res){
    const { cpf, inputs } = req.body;

    const score = inputs.reduce((total, input)=>{return total+input});
    const priority = priorities[Math.ceil(score/10) - 1]

    await db('patient_history')
    .insert({
      cpf,
      score,
      priority
    });

    return res.json({priority});
  }
}