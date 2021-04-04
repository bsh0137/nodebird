import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>  {/*태그가 아니라 Link태그에 href 해야 함.*/}
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;