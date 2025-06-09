import React from 'react';
import MouseTracker from './mouse-tracker';
import Timer from './timer';
import Permission from './permission';
import Validator from './validator';

const FoccApp = () => (
    <>
        <MouseTracker>
            {({ x, y }) => <h1>Mouse is at ({x}, {y})</h1>}
        </MouseTracker>
        <Timer>
            {seconds => <p>Elapsed time: {seconds}s</p>}
        </Timer>
        <Permission role="admin">
            {can => (
            <div>
                <button disabled={!can('edit')}>Edit</button>
                <button disabled={!can('delete')}>Delete</button>
            </div>
            )}
        </Permission>
        <Permission role="guest">
            {can => (
            <div>
                <button disabled={!can('edit')}>Edit</button>
                <button disabled={!can('delete')}>Delete</button>
            </div>
            )}
        </Permission>
        <Validator
            value="test@"
            rules={[
            val => (!val.includes('@') ? '缺少 @ 符号' : null),
            val => (val.length < 6 ? '长度太短' : null),
            ]}
        >
            {({ isValid, errors }) => (
            <div>
                {isValid ? <p>✅ 有效</p> : errors.map((e, i) => <p key={i}>❌ {e}</p>)}
            </div>
            )}
        </Validator>
    </>
  
);
export default FoccApp;
