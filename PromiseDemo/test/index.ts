import * as chai from "chai"
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
        let called = false
        const promise = new Promise(() => {
            called = true
        })
        // @ts-ignore
        assert(called === true)
    })
    it("new Promise(fn)中的fn执行时接收resolve和reject两个函数", () => {
        let called = false
        const promise = new Promise((resolve, reject) => {
            called = true
            assert.isFunction(resolve)
            assert.isFunction(reject)
        })
        // @ts-ignore
        assert(called === true)
    })
    it("promise.then(success)中的success会在resolve被调用时执行", done => {
        let called = false
        const promise = new Promise((resolve, reject) => {
            assert(called === false)
            resolve()
            setTimeout(() => {
                assert(called === true)
                done()
            }, 0)
        })
        // @ts-ignore
        promise.then(() => {
            called = true
        })
    })
})