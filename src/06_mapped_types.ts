// Mapped Types - Basic 
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

interface TestingType {
    isLoaded: string;
    isBad: number;
    isBroken: unknown;
    isFull: string;
}

type TestingOptions = OptionsFlags<TestingType>;


/* #region Mapped Types - Modifiers - readOnly*/
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
/* #endRegion */

/* #region Mapped Types - Modifiers - optional*/
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};
type User = Concrete<MaybeUser>;
/* #endRegion */

/* #region Mapped Types - Remapping */
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
interface Person {
    name: string;
    age: number;
    location: string;
}
type LazyPerson = Getters<Person>;
/* #endRegion */

/* #region Mapped Types - Remapping - Remove param */
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
/* #endRegion */