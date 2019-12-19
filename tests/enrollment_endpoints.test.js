'use_strict'
const request = require('supertest');
const express = require('express');
const app = require('../server');


//const app = require("../server")
describe('enrollment post endpoint', () => {
    // rosie
    it("should create an enrollment", async done => {
        const res = await request(app).post('/enrollment')
            .send({
                description: "post test werkt!",
                start_date: 4444565,
                end_date: 45566
            });
        expect(res.statusCode).toEqual(201);

        done();

    });
});

describe("enrollment get endpoints", () => {

    it("should get all enrollments", async done => {
        const res = await request(app).get('/enrollment');
        expect(res.statusCode).toEqual(200);
        expect(res.type).toEqual('application/json');
        done();

    });

    it("should get enrollment with id 2", async done => {
        const res = await request(app).get('/enrollment/2');
        expect(res.statusCode).toEqual(200);
        expect(res.type).toEqual('application/json');

        done();

    });

    it("/enrollment/55 should throw statuscode(400) cause id does not exists", async done => {
        const res = await request(app).get('/enrollment/55');
        expect(res.statusCode).toEqual(400);
        done();
    });

});

describe("enrollment delete endpoints", () => {
    it("should delete enrollment with id 1", async done => {
        const res = await request(app).delete('/enrollment/1');
        expect(res.statusCode).toEqual(200);

        done();
    });

    it("should throw statuscode(400) when id does not exists", async done => {
        const res = await request(app).delete('/enrollment/55');
        expect(res.statusCode).toEqual(400);
        done();
    });

});

describe("enrollment update endpoints", () => {

    it("should update all collumns of an enrollment with id 2", async done => {
        const res = await request(app).put('/enrollment-all/2').send({
            description: "post test update werkt!",
            start_date: 2323666,
            end_date: 45566
        });
        expect(res.statusCode).toEqual(200);

        done();

    });

    it("/enrollment-all/55 should throw statuscode(400) cause id does not exists", async done => {
        const res = await request(app).put('/enrollment-all/55');
        expect(res.statusCode).toEqual(400);
        done();
    });

    it("should update description of an enrollment with id 2", async done => {
        const res = await request(app).put('/enrollment-description/2').send({
            description: "post test update werkt!",
            start_date: 2323666,
            end_date: 45566
        });
        expect(res.statusCode).toEqual(200);

        done();

    });

    it("/enrollment-description/55 should throw statuscode(400) cause id does not exists", async done => {
        const res = await request(app).put('/enrollment-description/55');
        expect(res.statusCode).toEqual(400);
        done();
    });



    it("should update begin_date of an enrollment with id 2", async done => {
        const res = await request(app).put('/enrollment-begin/2').send({
            description: "post test update werkt!",
            start_date: 2323666,
            end_date: 45566
        });
        expect(res.statusCode).toEqual(200);

        done();

    });

    it("/enrollment-begin/55 should throw statuscode(400) cause id does not exists", async done => {
        const res = await request(app).put('/enrollment-begin/55');
        expect(res.statusCode).toEqual(400);
        done();
    });

    it("should update end_date of an enrollment with id 2", async done => {
        const res = await request(app).put('/enrollment-end/2').send({
            description: "post test update werkt!",
            start_date: 2323666,
            end_date: 45566
        });
        expect(res.statusCode).toEqual(200);

        done();

    });

    it("/enrollment-end/55 should throw statuscode(400) cause id does not exists", async done => {
        const res = await request(app).put('/enrollment-end/55');
        expect(res.statusCode).toEqual(400);
        done();
    });


    //test for when no good input is given
    it("request to change all collumns should give back error 400 ", async done => {
        const res = await request(app).put('/enrollment-all/2').send({

        });
        expect(res.statusCode).toEqual(400);

        done();

    });

    // need assesment

    // it("request to change all collumns should give back error 400 and no rows message ", async done => {
    //     const res = await request(app).put('/enrollment-all/55').send({

    //     });
    //     expect(res.statusCode).toEqual(400);
    //     expect(res.body.error).toEqual("no row by that id");

    //     done();

    // });


});