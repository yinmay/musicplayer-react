import React from 'react'
import Header from './compoents/header'
import Progress from './compoents/progress'

let Root = React.createClass({
    getInitialState(){
        return {
            progress:'-'
        }
    },
    componentDidMount(){
        //play music
        $('#player').jPlayer({
            ready:function(){
                $(this).jPlayer('setMedia', {
                    // mp3:'http://tingwa.oss-cn-shanghai.aliyuncs.com/2017-01/05/20170105123005-MzkzMTcz.mp3?OSSAccessKeyId=3b1nzo7roav1h50rcp0a35nw&Expires=1511506386&Signature=WmcqXQ2v4wIMjuK1pOlvCwScLZ4%3D'
                    mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
                }).jPlayer('play')
            },
            supplied:'mp3',
            vmode:'window'
        })
        //play progress
        $('#player').bind($.jPlayer.event.timeupdate, (e)=>{
            this.setState({
                progress:e.jPlayer.status.currentPercentAbsolute
            })
        })
    },
    componentWillUnmount(){
        $('#jPlayer').unbind($.jPlayer.event.timeupdate)
    },
    render(){
        return(
            <div>
                <Header />
                <div id="player"></div>
                <Progress progress = {this.state.progress}>

                </Progress>
            </div>

        )
    }
})
export default Root