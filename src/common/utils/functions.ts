import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { Request } from 'express';
import { ResponseMessages } from '../enums';

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
export function removeEmptyFieldsObject(obj: object) {
  for (const field in obj) {
    ['', ' ', null, undefined].includes(obj[field]) ? delete obj[field] : true;
  }
  return {...obj}
}