"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputPhoneState = exports.inputEmailState = exports.inputPasswordConfirmedState = exports.inputPasswordState = exports.inputIDState = void 0;

var _recoil = require("recoil");

//React를 위한 상태관리 라이브러리 
// Recoil 라이브러리에서 atom 함수 임포트
var inputIDState = (0, _recoil.atom)({
  key: 'inputIDState',
  // 상태 식별자
  "default": '' //기본값은 null

});
exports.inputIDState = inputIDState;
var inputPasswordState = (0, _recoil.atom)({
  key: 'inputPasswordState',
  "default": ''
});
exports.inputPasswordState = inputPasswordState;
var inputPasswordConfirmedState = (0, _recoil.atom)({
  key: 'inputPasswordConfirmedState',
  "default": ''
});
exports.inputPasswordConfirmedState = inputPasswordConfirmedState;
var inputEmailState = (0, _recoil.atom)({
  key: 'inputEmailState',
  "default": ''
});
exports.inputEmailState = inputEmailState;
var inputPhoneState = (0, _recoil.atom)({
  key: 'inputPhoneState',
  "default": ''
});
exports.inputPhoneState = inputPhoneState;