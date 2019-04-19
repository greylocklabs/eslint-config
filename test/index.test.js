import shell from 'shelljs';

const lint = (filepath) => shell.exec(`eslint test/data/${filepath}`, { silent: true }).code;

describe('javascript', () => {
  it('fails when the file is not formatted correctly', () => {
    expect(lint('js/fail.js')).toBe(1);
  });

  it('passes when the file is formatted correctly', () => {
    expect(lint('js/pass.js')).toBe(0);
  });
});

describe('typescript', () => {
  it('fails when the file is not formatted correctly', () => {
    expect(lint('ts/fail.ts')).toBe(1);
  });

  it('passes when the file is formatted correctly', () => {
    expect(lint('ts/pass.ts')).toBe(0);
  });
});

describe('react', () => {
  it('fails when the file is not formatted correctly', () => {
    expect(lint('react/fail.jsx')).toBe(1);
    expect(lint('react/fail.tsx')).toBe(1);
  });

  it('passes when the file is formatted correctly', () => {
    expect(lint('react/pass.jsx')).toBe(0);
    expect(lint('react/pass.tsx')).toBe(0);
  });
});

describe('vue', () => {
  it('fails when the file is not formatted correctly', () => {
    expect(lint('vue/fail.vue')).toBe(1);
  });

  it('passes when the file is formatted correctly', () => {
    expect(lint('vue/pass.vue')).toBe(0);
  });
});
