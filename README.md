# Draw Dice Game API

Server for Draw Dice API

## Base url

- `development` url: <br/>
  http://localhost:3000 (acc. PORT of `.env`)
- `production` url: <br/>
  `...`

## Paths

Endpoints list: <br/>
| path | method | query parameters | example url | payload | respond description | respond type | respond example |
|--- |--- |--- |--- |--- |--- |--- |--- |
| `/` | GET | n/a | http://localhost:3000 | n/a | for test purpose | "Server is working" |
| `/draw-dice/N` <br/>(where N is a count of draw dots) | GET | n/a | http://localhost:3000/draw-dice/6 | n/a | draw value | JSON | {<br/>  value: 3<br/> } |
| `/images/dice-6.png` | GET | n/a | http://localhost:3000/dice-6.png | n/a | 6-dots-dice image | png image file | - |
| `/images/dice-N-Mdots.png` <br/>(where N is a count of draw dots and M dot count of visible draw wall) | GET | n/a | http://localhost:3000/dice-6-3dots.png | n/a | image of M-dots-wall of N-dots-dice | png image file | - |

<br/><hr/>

# Usage

## Project setup

```
yarn
```

## Start localhost

```
yarn start
```

### Start localhost with extended DEBUG MESSAGES

```
yarn start-debug
```
