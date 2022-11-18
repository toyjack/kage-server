import { Injectable } from '@nestjs/common';
import { Kage, Polygons } from '@kurgm/kage-engine';
import { KageDto } from 'src/dto';

@Injectable()
export class KageService {
  gen(inputed: KageDto): any {
    const kage = new Kage();
    kage.kBuhin.push(inputed.target.name, inputed.target.data);

    for (const glyph of inputed.polygons) {
      kage.kBuhin.push(glyph.name, glyph.data);
    }

    const polygons = new Polygons();
    kage.makeGlyph(polygons, inputed.target.name);
    const svg = polygons.generateSVG();
    return svg;
  }
}
