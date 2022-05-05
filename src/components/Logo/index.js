import * as React from 'react'
import { Svg } from './styles'

export const SvgComponent = (props) => (
  <Svg
    width={283.32}
    height={126.84}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='108.34 11.58 283.32 126.84'
    style={{
      background: '0 0'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        id='b'
        x1={0.043}
        x2={0.957}
        y1={0.297}
        y2={0.703}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#ffb200' />
        <stop offset={0.5} stopColor='#e10057' />
        <stop offset={1} stopColor='#5A1A80' />
      </linearGradient>
      <linearGradient id='d' x1={0} x2={0} y1={0} y2={1}>
        <stop offset={0.2} stopColor='#fff' stopOpacity={0.8} />
        <stop offset={0.8} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
      <filter id='c' x='-100%' y='-100%' width='300%' height='300%'>
        <feMorphology radius={2} />
      </filter>
      <filter id='a' x='-100%' y='-100%' width='300%' height='300%'>
        <feFlood floodColor='#fff' result='flood' />
        <feConvolveMatrix
          in='SourceGraphic'
          result='conv'
          order='8,8'
          divisor={1}
          kernelMatrix='0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0'
        />
        <feOffset dy={4} in='conv' result='offset' />
        <feComposite operator='in' in='flood' in2='offset' result='comp' />
        <feGaussianBlur in='offset' stdDeviation={3} result='shadow' />
        <feColorMatrix
          in='shadow'
          values='0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0'
          result='dark-shadow'
        />
        <feOffset dy={4} in='dark-shadow' result='offset-shadow' />
        <feOffset dy={2} in='conv' result='offset-2' />
        <feComposite
          operator='out'
          in='offset'
          in2='offset-2'
          result='edge-diff'
        />
        <feGaussianBlur in='edge-diff' stdDeviation={1} result='edge-blur' />
        <feColorMatrix
          in='edge-blur'
          result='edge-shadow'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
        />
        <feComposite
          operator='in'
          in='edge-shadow'
          in2='offset'
          result='edge-shadow-in'
        />
        <feOffset dy={1} in='edge-shadow-in' result='edge-shadow-final' />
        <feMerge result='out'>
          <feMergeNode in='offset-shadow' />
          <feMergeNode in='comp' />
          <feMergeNode in='edge-shadow-final' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <g filter='url(#a)'>
      <path
        d='M4.99 13.44v-45.5h3.59l-.32 3.26q1.72-1.86 4.06-2.82 2.34-.96 4.64-.96 5.95 0 9.06 3.46 3.1 3.46 3.1 8.96v8.9q0 5.82-3.26 8.92Q22.59.77 17.22.77q-2.76 0-4.87-.77-2.11-.77-3.77-2.69v14.72l-3.59 1.41Zm20.55-33.86q0-4.67-2.47-6.78-2.46-2.11-5.85-2.11-3.46 0-5.96 2.08-2.49 2.08-2.68 6.49v10.12q0 4.16 2.36 6.14 2.37 1.98 6.28 1.98 3.52 0 5.92-2.08t2.4-6.04v-9.8ZM54.91-2.24Q52.61-.77 49.66 0q-2.94.77-5.88.77-4.74 0-7.52-2.34-2.79-2.33-2.79-7.01V-21.7q0-5.18 3.23-8.06 3.24-2.88 8.55-2.88 5.31 0 8.29 2.85 2.97 2.85 2.97 7.9v8.32l-19.45 1.09v3.9q0 3.08 1.98 4.61 1.98 1.54 5.18 1.54 4.48 0 9.28-2.56l1.41 2.75Zm-1.98-20.1q0-3.96-2.5-5.6-2.49-1.63-5.25-1.63-3.52 0-5.82 1.92-2.3 1.92-2.3 6.02V-16l15.87-.77v-5.57ZM68.61.83q-3.59-1.02-5.19-3.26-1.6-2.24-1.6-6.02V-44.8h3.59v12.74h7.68l-1.54 3.39h-6.14v20.22q0 5.12 4.22 6.53L68.61.83Zm24.64 9.86q4.22-1.6 4.22-6.66V-3.9Q94.78.77 88.83.77q-5.63 0-8.77-3.07-3.13-3.08-3.13-8.96v-9.54q0-5.63 3.29-8.74 3.3-3.1 8.87-3.1 5.95 0 8.64 4.29l-.26-3.71h3.59V4.1q0 3.84-1.6 6.01-1.6 2.18-5.25 3.33l-.96-2.75Zm4.22-32.19q0-3.97-2.56-5.92-2.56-1.96-6.08-1.96-3.39 0-5.85 2.08-2.47 2.08-2.47 6.82v9.79q0 4.03 2.27 6.08 2.28 2.05 6.05 2.05 3.59 0 6.11-2.21 2.53-2.21 2.53-6.3V-21.5ZM107.14 0v-32.06h3.58l-.19 2.24q3.01-2.82 7.87-2.82 1.73 0 4.74.58l-.96 3.26q-2.05-.64-4.29-.64-2.95 0-5.06 1.09-2.11 1.09-2.11 3.26V0h-3.58Zm44.41 0q-6.91.7-9.98.7-6.72 0-10.69-2.49-3.97-2.5-3.97-9.03v-5.31q0-6.33 4.42-8.51 2.11-1.09 5.37-1.09 3.01 0 6.08.99 3.08 1 5.19 2.6 0-3.52-2.05-5.6-2.05-2.08-7.87-2.08l.19-2.76q6.14 0 9.06 1.96 2.91 1.95 3.58 4.64.67 2.68.67 6.91V0Zm-3.58-19.39q-2.63-1.22-5.6-2.11-2.98-.9-5.47-.9-6.47 0-6.47 6.46v5.57q0 4.16 2.88 6.05 2.88 1.89 8.19 1.89 2.76 0 6.47-.51v-16.45ZM195.26 0v-21.95q0-3.84-2.01-5.63-2.02-1.8-5.22-1.8-2.49 0-5.57 1.09l-2.36 1.15q1.08 2.18 1.08 5V0h-3.52v-21.95q0-3.91-2.01-5.67-2.02-1.76-5.28-1.76-1.99 0-4.1.61-2.11.61-3.84 1.57V0h-3.58v-32.06h3.58l-.32 2.04q4.23-2.49 8.64-2.49 2.31 0 4.32.77 2.02.76 3.43 2.24.89-.52 2.68-1.41 3.78-1.73 7.3-1.73 4.54 0 7.42 2.78 2.88 2.79 2.88 7.72V0h-3.52Z'
        fill='url(#b)'
        transform='translate(148.115 104.12)'
      />
    </g>
    <g filter='url(#c)'>
      <path
        d='M4.99 13.44v-45.5h3.59l-.32 3.26q1.72-1.86 4.06-2.82 2.34-.96 4.64-.96 5.95 0 9.06 3.46 3.1 3.46 3.1 8.96v8.9q0 5.82-3.26 8.92Q22.59.77 17.22.77q-2.76 0-4.87-.77-2.11-.77-3.77-2.69v14.72l-3.59 1.41Zm20.55-33.86q0-4.67-2.47-6.78-2.46-2.11-5.85-2.11-3.46 0-5.96 2.08-2.49 2.08-2.68 6.49v10.12q0 4.16 2.36 6.14 2.37 1.98 6.28 1.98 3.52 0 5.92-2.08t2.4-6.04v-9.8ZM54.91-2.24Q52.61-.77 49.66 0q-2.94.77-5.88.77-4.74 0-7.52-2.34-2.79-2.33-2.79-7.01V-21.7q0-5.18 3.23-8.06 3.24-2.88 8.55-2.88 5.31 0 8.29 2.85 2.97 2.85 2.97 7.9v8.32l-19.45 1.09v3.9q0 3.08 1.98 4.61 1.98 1.54 5.18 1.54 4.48 0 9.28-2.56l1.41 2.75Zm-1.98-20.1q0-3.96-2.5-5.6-2.49-1.63-5.25-1.63-3.52 0-5.82 1.92-2.3 1.92-2.3 6.02V-16l15.87-.77v-5.57ZM68.61.83q-3.59-1.02-5.19-3.26-1.6-2.24-1.6-6.02V-44.8h3.59v12.74h7.68l-1.54 3.39h-6.14v20.22q0 5.12 4.22 6.53L68.61.83Zm24.64 9.86q4.22-1.6 4.22-6.66V-3.9Q94.78.77 88.83.77q-5.63 0-8.77-3.07-3.13-3.08-3.13-8.96v-9.54q0-5.63 3.29-8.74 3.3-3.1 8.87-3.1 5.95 0 8.64 4.29l-.26-3.71h3.59V4.1q0 3.84-1.6 6.01-1.6 2.18-5.25 3.33l-.96-2.75Zm4.22-32.19q0-3.97-2.56-5.92-2.56-1.96-6.08-1.96-3.39 0-5.85 2.08-2.47 2.08-2.47 6.82v9.79q0 4.03 2.27 6.08 2.28 2.05 6.05 2.05 3.59 0 6.11-2.21 2.53-2.21 2.53-6.3V-21.5ZM107.14 0v-32.06h3.58l-.19 2.24q3.01-2.82 7.87-2.82 1.73 0 4.74.58l-.96 3.26q-2.05-.64-4.29-.64-2.95 0-5.06 1.09-2.11 1.09-2.11 3.26V0h-3.58Zm44.41 0q-6.91.7-9.98.7-6.72 0-10.69-2.49-3.97-2.5-3.97-9.03v-5.31q0-6.33 4.42-8.51 2.11-1.09 5.37-1.09 3.01 0 6.08.99 3.08 1 5.19 2.6 0-3.52-2.05-5.6-2.05-2.08-7.87-2.08l.19-2.76q6.14 0 9.06 1.96 2.91 1.95 3.58 4.64.67 2.68.67 6.91V0Zm-3.58-19.39q-2.63-1.22-5.6-2.11-2.98-.9-5.47-.9-6.47 0-6.47 6.46v5.57q0 4.16 2.88 6.05 2.88 1.89 8.19 1.89 2.76 0 6.47-.51v-16.45ZM195.26 0v-21.95q0-3.84-2.01-5.63-2.02-1.8-5.22-1.8-2.49 0-5.57 1.09l-2.36 1.15q1.08 2.18 1.08 5V0h-3.52v-21.95q0-3.91-2.01-5.67-2.02-1.76-5.28-1.76-1.99 0-4.1.61-2.11.61-3.84 1.57V0h-3.58v-32.06h3.58l-.32 2.04q4.23-2.49 8.64-2.49 2.31 0 4.32.77 2.02.76 3.43 2.24.89-.52 2.68-1.41 3.78-1.73 7.3-1.73 4.54 0 7.42 2.78 2.88 2.79 2.88 7.72V0h-3.52Z'
        fill='url(#d)'
        transform='translate(148.115 104.12)'
      />
    </g>
  </Svg>
)

export default SvgComponent
