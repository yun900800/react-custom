import React from 'react';
import PropTypes from 'prop-types'; // 新增这一行

const List = ({ collection, textKey, titleKey, urlKey }) => (
    <ul>
    {collection.map(item =>
        <Item
        key={item[textKey]}
        id={item[textKey]}
        title={item[titleKey]}
        url={item[urlKey]}
        />
    )}
    </ul>
)
List.propTypes = {
    collection: PropTypes.array,
    textKey: PropTypes.string,
    titleKey: PropTypes.string,
    urlKey: PropTypes.string,
};
List.defaultProps = {
    collection: [],
    textKey: 'objectID',
    titleKey: 'title',
    urlKey: 'url',
};
const Item = ({ title, url, id }) => (
    <li id={id}>
    {/* <h1>{title}</h1> */}
    <a href={url}>{title && <p>{title}</p>}</a>
    </li>
)
Item.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.string.isRequired, // 添加 key 的类型检查
}

export default List;