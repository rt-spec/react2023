type Mods = Record<string, boolean | string>

export function classNames( cls : string, mod : Mods = {}, additinal : string[] = []) :string{
    return [
        cls,
        ...additinal.filter(Boolean),
        ...Object.entries(mod).filter(([key, value]) => Boolean(value)).map(([key, value]) => key)
    ].join(' ')
}