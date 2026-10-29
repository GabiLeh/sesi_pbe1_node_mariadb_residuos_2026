const con = require('../db')

const cadastrar = (req, res) => {
    const { usuarioId, local, tipoResiduo, nivelRisco, data, status } = req.body
    try {
        const sql = 'INSERT INTO ocorrencia (usuarioId, local, tipoResiduo, nivelRisco, data, status) VALUES (?, ?, ?, ?, ?, ?);'
        con.query(sql, [usuarioId, local, tipoResiduo, nivelRisco, data, status], (err, results) => {
            if (err) {
                console.error(err)
                res.status(500).json({ error: 'Erro ao cadastrar ocorrência' })
            } else {
                const novaocorrencia = req.body
                novaocorrencia.id = results.insertId
                res.status(201).json({ message: 'Ocorrência cadastrada com sucesso', event: novaocorrencia })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Erro ao cadastrar ocorrência', details: 'Informe { usuarioId, local, tipoResiduo, nivelRisco, data, status }' })
    }
}

const listar = (req, res) => {
    const sql = 'SELECT * FROM ocorrencia;'
    con.query(sql, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar ocorrências' })
        } else {
            res.json(results)
        }
    })
}

const alterar = (req, res) => {
    const id = Number(req.params.id)
    const chaves = Object.keys(req.body)
    let campos = ''
    const colunas = []
    chaves.forEach((chave) => {
        campos += `${chave} = ?,`
        colunas.push(req.body[chave])
    })
    campos = campos.slice(0, -1)
    colunas.push(id)
    const sql = `UPDATE ocorrencia SET ${campos} WHERE id = ?;`
    con.query(sql, colunas, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao alterar ocorrência', msg: err.sqlMessage })
        } else {
            if (results.affectedRows == 1)
                res.json("Registro alterado com sucesso")
            else
                res.status(404).json({ msg: "Nada alterado no banco de dados", erro: results })
        }
    })
}

const excluir = (req, res) => {
    const id = Number(req.params.id)
    const sql = 'DELETE FROM ocorrencia WHERE id = ?;'
    con.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ erro: 'Erro ao excluir ocorrência', msg: err.sqlMessage })
        } else {
            if (results.affectedRows == 1)
                res.json("Registro excluído com sucesso")
            else
                res.status(404).json({ msg: "Nada alterado no banco de dados", erro: results })
        }
    })
}

const resumo = (req, res) => {
    const sql1 = 'SELECT AVG(nivelRisco) as "Riscos medios" FROM ocorrencia;'
    const sql2 = 'SELECT * FROM ocorrencia;'
    con.query(sql1, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar médias' })
        } else {
            const resposta = {}
            resposta.media = results
            con.query(sql2, (err, results) => {
                if (err) {
                    console.error(err)
                    res.status(500).json({ error: 'Erro ao buscar ocorrências' })
                }else{
                    resposta.ocorrencias = results
                    res.json(resposta)
                }
            })
        }
    })
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir,
    resumo
}