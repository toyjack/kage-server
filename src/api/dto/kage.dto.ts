// TODO: check type

interface Kage {
  name: string;
  data: string;
}

export class KageDto {
  target: Kage;
  children: Kage[];
}
