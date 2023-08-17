import { classNames } from "./classNames"

describe( 'classNames', () => {
    test ( 'with onle first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    });
    test ( 'with additional class', () => {
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe('someClass cls1 cls2');
    });
    test ( 'with additional class', () => {
        const expected = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(expected);
    });
    test ( 'with mods', () => {
        const expected = 'someClass cls1 cls2 hoved scrolable';
        expect(classNames('someClass', {'hoved' : true, 'scrolable' : true}, ['cls1', 'cls2'])).toBe(expected);
    });
    test ( 'with mods false', () => {
        const expected = 'someClass cls1 cls2 hoved';
        expect(classNames('someClass', {'hoved' : true, 'scrolable' : false}, ['cls1', 'cls2'])).toBe(expected);
    });
    test ( 'with mods false', () => {
        const expected = 'someClass cls1 cls2 hoved';
        expect(classNames('someClass', {'hoved' : true, 'scrolable' : undefined}, ['cls1', 'cls2'])).toBe(expected);
    });
})