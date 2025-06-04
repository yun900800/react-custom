import React, {useRef, useEffect, useState} from 'react';
import { Motion, spring } from 'react-motion'
import useInput  from './use-input';
const Uncontrolled = () => (
    <form>
        <input type="text" />
        <button>Submit</button>
    </form>
)

class UncontrolledForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target }) {
        this.setState({
            value: target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} />
                <button type="submit">Submit</button>
                <div onClick={() => console.log('Parent')}>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        console.log('Child');
                    }}>
                        Click me
                    </button>
                </div>
            </form>
        );
    }
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        }
        this.handleChangeFirstName =
        this.handleChangeFirstName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeFirstName({ target }) {
        this.setState({
            firstName: target.value,
        })
    }
    handleChangeLastName({ target }) {
        this.setState({
            lastName: target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`${this.state.firstName} ${this.state.lastName}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Name Form</h2>
                <input type="text" onChange={this.handleChangeFirstName} />
                <br />
                <input type="text" onChange={this.handleChangeLastName} />
                <button>Submit</button>
            </form>
        );
    }
}

class NamePromoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`${this.state.firstName} ${this.state.lastName}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Name Promote Form</h2>
                <input type="text" name="firstName" onChange={this.handleChange} />
                <input type="text" name="lastName" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

const UncontrolledFormInput = () => {
    const name = useInput();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" {...name} />
            <button>Submit</button>
        </form>
    );
};

const Controlled = () => (
    <form>
        <input type="text"  defaultValue="Hello React" />
        <button>Submit</button>
    </form>
)

class ControlledForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'Dan',
            lastName: 'Abramov',
            hovered: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(`${this.state.firstName} ${this.state.lastName}`)
    }

    doStuff(type) {
        console.log(`Action: ${type.action}`);
    }

    handleEvent = (e) => {
        switch (e.type) {
            case 'click':
                return this.doStuff({ action: 'DO_STUFF' })

            case 'mouseenter':
                return this.setState({ hovered: true })

            case 'mouseleave':
                return this.setState({ hovered: false })

            default:
                console.warn(`Unhandled event type: ${e.type}`)
        }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            />
            <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            />
            <button>Submit</button>
            <div
                onMouseEnter={this.handleEvent}
                onMouseLeave={this.handleEvent}
            >
                {this.state.hovered ? 'Hovering!' : 'Not hovering'}
            </div>
        </form>
        )
    }
}

function MyComponent({ value }) {
  const prevValueRef = useRef()

  useEffect(() => {
    console.log('上一个 value:', prevValueRef.current)
    prevValueRef.current = value
  }, [value])

  return <div>当前 value: {value}, preValue is {prevValueRef.current}</div>
}

function TimerComponent() {
  const [count, setCount] = useState(0)
  const timerRef = useRef(null) // ⚠️ 不是用来绑定任何 DOM 的

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [])

  return <div>
    Count: {count} , timeId is : {timerRef.current}
    <MyComponent value={count} />
    {/* <Example /> */}
    </div>
}

function Example() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)

  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('最新的 count:', countRef.current) // 始终是最新值
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <button onClick={() => setCount(c => c + 1)}>
      count: {count}
    </button>
  )
}

const Transition = () => (
  <Motion
    defaultStyle={{ opacity: 0, translateX: -100 }}
    style={{
      opacity: spring(1, { stiffness: 60, damping: 20 }),
      translateX: spring(0, { stiffness: 60, damping: 20 }), 
    }}
  >
    {interpolatingStyle => (
      <h1
        style={{
          opacity: interpolatingStyle.opacity,
          transform: `translateX(${interpolatingStyle.translateX}px)`,
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        Hello React
      </h1>
    )}
  </Motion>
);



export { Uncontrolled, NameForm, NamePromoteForm,
     UncontrolledFormInput, Controlled,ControlledForm,
     TimerComponent,
     Transition
     };
export default UncontrolledForm;