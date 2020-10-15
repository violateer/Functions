function Promise(excutor) {
    // 初始化对象
    let self = this
    self.status = 'pending'
    self.value = null
    self.reason = null

    // 创建resolve函数
    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value
            self.status = 'fulfilled'
        }
    }

    // 创建reject函数
    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason
            self.status = 'rejected'
        }
    }

    // 捕捉错误调用reject
    try {
        excutor(resolve, reject)
    } catch (err) {
        reject(err)
    }
}