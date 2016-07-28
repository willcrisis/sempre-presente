describe('AlunoService', () => {
  let alunos;
  let alunoService;

  beforeEach(() => {
    alunos = [{$id: 1, nome: 'Fulano'}];
    alunoService = new AlunoService();
  });

  it('shoud add an aluno to the list', () => {
    const res = alunoService.addAluno({$id: 2, nome: 'Ciclano'}, alunos);
    expect(res.length).toEqual(2);
    expect(res[1].$id).toEqual(2);
  });

  it('shoud remove an aluno from the list', () => {
    const res = alunoService.removeAluno({$id: 1, nome: 'Fulano'}, alunos);
    expect(res.length).toEqual(0);
  });

  it('shoud edit an aluno', () => {
    const res = alunoService.editAluno({$id: 1, nome: 'Beltrano'}, alunos);
    expect(res.length).toEqual(1);
    expect(res[0].nome).toEqual('Beltrano');
  });
});
