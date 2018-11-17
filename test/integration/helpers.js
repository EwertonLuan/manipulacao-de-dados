import supertest from 'supertest';
import chai from 'chai';
import setupApp from '../../src/app.js';



global.setupApp = setupApp.app_test;
global.supertest = supertest;
global.expect = chai.expect;