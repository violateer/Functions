import * as chai from "chai"
import * as sinon from "sinon"
import * as sinonChai from "sinon-chai"
chai.use(sinonChai)

import Promise from "../src/promise"

const assert = chai.assert

describe("Promise", () => {
    it("是一个类", () => {
        assert.isFunction(Promise)
        assert.isObject(Promise.prototype)
    })
    it("new Promise如果接收的不是一个函数就报错", () => {
        assert.throw(() => {
            //@ts-ignore
            new Promise()
        })
        assert.throw(() => {
            //@ts-ignore
            new Promise(1)
        })
        assert.throw(() => {
            //@ts-ignore
            new Promise(false)
        })
    })
    it("new Promise(fn)生成一个对象， 对象有then方法", () => {
        const promise = new Promise(() => { })
        assert.isFunction(promise.then)
    })
    it("new Promise(fn)中的fn应是立即执行", () => {
        let fn = sinon.fake()
        new Promise(fn)
        assert(fn.called)
    })
    it("new Promise(fn)中的fn执行时接收resolve和reject两个函数", (done) => {
        new Promise((resolve, reject) => {
            assert.isFunction(resolve)
            assert.isFunction(reject)
            done()
        })
    })
    it("promise.then(success)中的success会在resolve被调用时执行", done => {
        let success = sinon.fake()
        const promise = new Promise((resolve, reject) => {
            assert.isFalse(success.called)
            resolve()
            setTimeout(() => {
                assert.isTrue(success.called)
                done()
            }, 0)
        })
        // @ts-ignore
        promise.then(success)
    })
})