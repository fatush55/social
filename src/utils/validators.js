
export const creatorMaxLength = (count) => (value) => !value || value.length > count ? `max ${count} symbol` :undefined

export const required = (value) => !value || !value.trim().length ? 'required' : undefined

export const email = (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined