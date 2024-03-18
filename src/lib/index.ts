import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const defaultTitle = 'Teddy Byron'
export const formatTitle = (title: string) => `${title} \u2022 ${defaultTitle}`

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

export const pgp = {
  fingerprint: 'B9A9 D49D 6D7C FC58 899A  4122 E049 6EDD DF6B B87D',
  publicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBFsULx4BCADDwSU2IGJS45/yZFmFLXHqyWcHvzVhJvC73Z6rM2j5rq558Xzh
ui0HZ+fC+1OSwx4X6pnJmrpEckRFVGibh6+9qt/OlCU+QCBCiINRAW2pfpAisPLL
DJTLjqOW0XLnC2VJ0Ro4IvRNUz+7Jl/m0TYCaLeT+sHotQaRQMYm+XkS7yTb6B3e
OvM+B0SfMN4FVch39fTgzCpKfCzCosQ5WKF3HGXkQzEVqB6xtKiQokdLhmRsFdqC
j3id7MpHFxcSoM5B2/XH3twEuJOVrEpBIEhedPxZj2BdIIE9aIxStyL7atfdJGCa
KoB5JPGuQHAYso0WIUWCYek+uw3emQ9ooagRABEBAAG0IVRoZW9kb3JlIEJ5cm9u
IDx0ZWRAdGVkYnlyb24uY29tPokBTgQTAQgAOBYhBLmp1J1tfPxYiZpBIuBJbt3f
a7h9BQJbFC8eAhsDBQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJEOBJbt3fa7h9
LcgH/j6cLlSTR/K/pg4DK/SiFZiwyWPc7JbTbEFetzHYeIVwDoPTELxkHbfbV5+1
U0t6H0OxM0lXqBVuEnXsNoh53HWISV/8A+Drrezjz/1c9LHg8oOTpHYMqj6FuQwS
W9V21DQHnqCrQQaGWIzB78pOSeWAjAIfOkTnL+3/o9VT7oMO0bUGG1tY4eysHql+
4jRz2YJsAu01z+C7HhyQWeEnnkZQLncBW5n8WQDxU/4HWUKPFZKvVaypNzT4Mezf
JeDEUMsbymAb5yeLJvjrBPQXCQjVMrbK+H8eO8/G+jWQIcwJTAT4mUTNYjTCQ7dZ
jgwLoJGWqVxJ7QcJFW4bv62kWbc=
=BIS1
-----END PGP PUBLIC KEY BLOCK-----`,
}
