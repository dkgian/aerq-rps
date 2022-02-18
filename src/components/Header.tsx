import React, { FC, ReactElement } from 'react'

interface Props {
	title: String
}

const Header: FC<Props> = ({ title }) => {
	return <div>Header {title}</div>
}

export default Header
