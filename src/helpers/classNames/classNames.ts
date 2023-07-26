type mod = Record<string, boolean | string>

export function classNames( cls : string, mod : mod, additinal : string[]) :string{
    return [
        cls,
        ...additinal,
        ...Object.entries(mod).filter(([key, value]) => Boolean(value)).map(([key, value]) => key)
    ].join(' ')
}