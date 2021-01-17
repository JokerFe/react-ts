import React, {FC} from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Nav: FC = (): JSX.Element => {
    return (
        <ul>
            <li>home</li>
            <li>about</li>
            <li>link</li>
            <li>Me</li>
        </ul>
    )
}