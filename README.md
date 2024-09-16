# Angular-Rating-Component

**`ngratingmodule`** is an Angular library designed to provide a versatile and customizable star rating component. This library simplifies the integration of rating functionalities into Angular applications, offering a range of styling options and features to suit various needs.


![Version](https://img.shields.io/badge/version-0.0.2-blue)
![Author Badge](https://img.shields.io/badge/Author-ShivnathTathe-red)
## Key Features

- **Customizable Ratings**: 
  Adjust the star color, size, and background color to match your application's design.
  
- **Dynamic Star Width**: 
  The component supports dynamic width adjustment based on the rating value, allowing for flexible display.

- **Show Count Option**: 
  Optionally display the numerical rating count alongside the stars for additional context.

- **Easy Integration**: 
  Designed to be seamlessly integrated into Angular projects with minimal configuration.

## Installation

To install `ngratingmodule`, use npm with the following command:

```bash
npm install ngratingmodule@0.0.2
```
[Official Website](https://www.npmjs.com/package/ngratingmodule)
### Usage:
ts componenet
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgratingComponent } from 'ngratingmodule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgratingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
```

html component
```html
<lib-ngrating
  [rating]="3.5"
  [color]="'#e59807'"
  [backgroundStarColor]="'#adadad'"
  [size]="'3'"
  [showCount]="true"
></lib-ngrating>
```
running angular app

```bash
ng s
```
### Properties:

- **`[rating]`**  
  - **Type**: `number`  
  - **Description**: Defines the current rating value to display. Supports decimal values to represent fractional ratings (e.g., `3.5`).

- **`[color]`**  
  - **Type**: `string`  
  - **Description**: Sets the color of the filled stars. Accepts any valid CSS color value (e.g., `#e59807`, `red`, `rgb(255, 0, 0)`).

- **`[backgroundStarColor]`**  
  - **Type**: `string`  
  - **Description**: Defines the color for the background or unfilled stars. Like `color`, it supports any valid CSS color.

- **`[size]`**  
  - **Type**: `string` or `number`  
  - **Description**: Specifies the size of the stars. The value scales the star icons proportionally (e.g., `2`, `3`, etc.).

- **`[showCount]`**  
  - **Type**: `boolean`  
  - **Description**: When set to `true`, displays the numerical value of the rating next to the stars. If `false`, only the stars are shown.
### License

This project is licensed under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt). You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. However, the software is provided "as is", without any warranty of any kind. While attribution is not required, we would appreciate it if you credited the original author or project in your product documentation or source, but this is entirely optional.


