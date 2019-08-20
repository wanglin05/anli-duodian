module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        "allowImportExportEverywhere": true  //ignore eslint error: 'import' and 'export' may only appear at the top level
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    plugins: [
        'html',
        'vue'
    ],
    "rules": {
        "indent": ["error", "tab"],
        "comma-dangle": ["error", "never"], //是否允许对象中出现结尾逗号
        "no-cond-assign": 2, //条件语句的条件中不允许出现赋值运算符
        "no-console": 0, //不允许出现console语句
        "no-dupe-args": 2, //函数定义的时候不允许出现重复的参数
        "no-dupe-keys": 2, //对象中不允许出现重复的键
        "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
        "no-empty": 2, //不允许出现空的代码块
        "no-extra-boolean-cast": 2, //不允许出现不必要的布尔值转换
        "no-extra-parens": 0, //不允许出现不必要的圆括号
        "no-extra-semi": 2, //不允许出现不必要的分号

    }
}