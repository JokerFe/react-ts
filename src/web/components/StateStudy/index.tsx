/*
 * @Author: haorongzheng
 * @Date: 2021-01-24 13:40:53
 * @LastEditTime: 2021-01-24 15:06:05
 * @LastEditors: haorongzheng
 * @Description: Fiber相关
 * @FilePath: /react-ts/src/web/components/StateStudy/index.tsx
 * @保佑代码永无bug
 */
import React from 'react';
import { flushSync } from'react-dom';
import { RouteComponentProps } from 'react-router-dom';
interface FiberStudyState {
    tag:number
}

/**
 * @setState更新是同步的还是异步的
 * 如果是正常情况下，也就是没有使用Concurrent组件的情况下，是同步更新的，但是不会立即获取到
 * 最新的state的值，因为调用setState只是单纯地将你传进来的新的state放入updateQueue这条链表上，
 * 等这个点击事件结束之后，会触发内部的一个回调函数，在这个回调函数中才会真正地更新state和重新渲染。
 * 
 * 当使用了Concurent组件的时候，才是真正的异步更新模式，同样的没法立即获取最新状态，并且在执行react的更新
 * 和渲染的过程中使用了真正的异步方式（postMessage）放到EventLoop里去执行，这才是真正的异步。
 * 
 * 当使用了flushSync这个API的时候，react的更新渲染完全是同步的，会立即触发更新state和渲染的过程。
 * 这种情况可以获取到最新的状态
 * 同步触发情况：
 * 1. 不调用合成事件点击
 * 2. 放到下个事件循环中
 * 3. 调用flushSync这个API
 */
export default class FiberStudy extends React.Component<RouteComponentProps,FiberStudyState> {
    constructor(props:RouteComponentProps){
        super(props);
        this.state = {
            tag:0
        }
    }
    handleTimeOutClick=()=> {
        setTimeout(()=>{
            this.setState({tag:3})
            console.log(this.state.tag)
        })
    }
    handleBtnClickSync=()=>{
        flushSync(()=>{
            this.setState({tag:2})
        })
        console.log(this.state.tag)
    }
    handleBtnClick=()=>{
        this.setState({
            tag:1
        })
        console.log(this.state.tag)
    }
    componentDidMount(){
        document.getElementById("local").addEventListener("click",this.handleBtnClick) 
    }
    render() {
        return <div>
            <button onClick={this.handleTimeOutClick}>setTimeout点击</button>
            <button onClick={this.handleBtnClickSync}>调用API点击</button>
            <button id="local">原生事件点击</button>
            <button onClick={this.handleBtnClick}>组合事件点击</button>
        </div>
    }
}
