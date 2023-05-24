const HEAD = (
    <div style={{
        width: 50,
        height: 50,
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: 50,
        right: '-30px',
    }} />
)

const BODY = (
    <div style={{
        width: 10,
        height: 100,
        background: 'black',
        position: 'absolute',
        top: 120,
        right: 0,
    }} />
)

const RIGHT_ARM = (
    <div style={{
        width: 100,
        height: 10,
        background: 'black',
        position: 'absolute',
        top: 150,
        right: '-100px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }} />
)

const LEFT_ARM = (
    <div style={{
        width: 100,
        height: 10,
        background: 'black',
        position: 'absolute',
        top: 150,
        right: 10,
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }} />
)

const RIGHT_LEG = (
    <div style={{
        width: 100,
        height: 10,
        background: 'black',
        position: 'absolute',
        top: 210,
        right: '-90px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }} />
)

const LEFT_LEG = (
    <div style={{
        width: 100,
        height: 10,
        background: 'black',
        position: 'absolute',
        top: 210,
        right: 0,
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{ height: 50, width: 10, background: 'black', position: 'absolute', top: 0, right: 0 }} />
            <div style={{ height: 10, width: 200, background: 'black', marginLeft: 120 }} />
            <div style={{ height: 400, width: 10, background: 'black', marginLeft: 120 }} />
            <div style={{ height: 10, width: 250, background: 'black' }} />
        </div>
    )
}