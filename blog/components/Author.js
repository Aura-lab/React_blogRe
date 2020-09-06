import {Avatar,Divider} from 'antd'
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://scontent.fwlg1-1.fna.fbcdn.net/v/t1.0-0/s526x395/30708893_210243443074237_8745122454873047040_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=C0BYsly1DCAAX8ytjy4&_nc_oc=AQn2pkluPZGOdF1K0eNPxqMzPqd1r_guE_YWoRV--PRKoOPW-mIBTV3SOkUvOv3g5qI&_nc_ht=scontent.fwlg1-1.fna&tp=7&oh=c419e7e4eb2f9137403cd5ba9edc5a9e&oe=5F6F4590"  /></div>
            <div className="author-introduction">
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"></Avatar>
                <Avatar size={28} icon={<QqOutlined />} className="account"></Avatar>
                <Avatar size={28} icon={<WechatOutlined />} className="account"></Avatar>
            </div>
        </div>
    )

}

export default Author