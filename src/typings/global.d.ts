/** Global definitions for development **/
// declaration of global varaible in the global (window) object
declare module NodeJS {
  interface Global {
    __REDUX_DEVTOOLS_EXTENSION__(): any
  }
}

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// Omit type https://github.com/Microsoft/TypeScript/issues/12215
type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
