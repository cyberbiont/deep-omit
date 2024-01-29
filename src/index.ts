import { DeepOmit } from 'ts-essentials'

type Cfg = {
	a: number
	b: number
	c: number
	d: {
		foo: string
		bar: string
	}
}

type Omitted = {
	a: never
	d: {
		foo: never
	}
}

type OmittedInCfgResult = DeepOmit<Cfg, Omitted>