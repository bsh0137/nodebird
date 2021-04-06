import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { Menu } from 'antd'

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                <   Link href="/profile"><a>프로필</a></Link>  {/*태그가 아니라 Link태그에 href 해야 함.*/}
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;