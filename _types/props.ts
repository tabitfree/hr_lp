export type TypePropO = { type?: string };
export type TxtProp = { txt: string };

export type ResultProp = {
  title: string;
  texts: string[];
};

export type CardProps = {
  name: string;
  place: string;
  position: string;
  desc: string;
  result: ResultProp;
};
