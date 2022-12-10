import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { Request } from 'express';
import { IFloorFilesUpload } from 'src/modules/floor/interfaces/files.interface';
import { ResponseMessages } from '../enums';
import { MulterFile } from '../types/public';

export function randomNumber(length: number): number {
  let max = '9';
  let min = '1';
  for (let index = 1; index < length; index++) {
    max += '0';
    min += '0';
  }
  return Math.floor(Math.random() * parseInt(max)) + parseInt(min);
}

export function createEnumWithObject<T>(target: T): T {
  Object.freeze(target);
  return target;
}
export function filterObject(obj: object, ...keys: string[]) {
  for (const key of keys) {
    delete obj[key]
  }
  return obj
}
export function removeEmptyFieldsObject(obj: object): any {
  for (const field in obj) {
    ['', ' ', null, undefined].includes(obj[field]) ? delete obj[field] : true;
  }
  return {...obj}
}
export function getObjectFiles(files: any) {
  let fileObject: any | object = {}
  for (const key in files) {
    fileObject[key] = files[key].map((file: MulterFile) => file.path.slice(7))
  }
  return fileObject;
}
export function parseValue(objectDto: object) {
  for (const key in objectDto) {
    if(!isNaN(Number(objectDto[key]))) objectDto[key] = +objectDto[key];
    if(typeof objectDto[key] == "string" && objectDto[key] == "true") objectDto[key] = true;
    if(typeof objectDto[key] == "string" && objectDto[key] == "false") objectDto[key] = false;
    
  }
  return objectDto;
}