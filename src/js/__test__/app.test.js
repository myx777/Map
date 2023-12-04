import ErrorRepository from '../app';

describe('test class ErrorRepository (reading and writing an error by its number)', () => {
  const errorRepo = new ErrorRepository();
  errorRepo.addError(400, 'Bad Request');
  errorRepo.addError(403, 'Forbidden');
  errorRepo.addError(500, 'Internal Server Error');

  test('check add number of error to ErrorRepository', () => {
    expect(errorRepo.errorMap.get(400)).toBe('Bad Request');
  });
  test('check add description error to ErrorRepository', () => {
    expect(errorRepo.errorMap.get(400)).toBe('Bad Request');
  });
  test('displaying an error by its number', () => {
    expect(errorRepo.translate(403)).toBe('Forbidden');
  });

  test('if the transmitted error number does not exist, it should display "Unknown error"', () => {
    expect(errorRepo.translate(406)).toBe('Unknown error');
  });
});
