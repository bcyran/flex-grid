# Flex Grid
CSS grid using flexbox and BEM. Simple, light, responsive.

## Usage
### Container
To define container use `flex` class.

### Columns
Column class should look something like that:

`flex__col--fraction`

If you want to add responsivness you can use *size* modifier. By default it's *m* (above 600px) and *l* (above 900px).

`flex__col--size--fraction`

There are 12 columns so fraction denominator should be 12. If it's possible to simplify a fraction you can do it.


For example:
```
flex__col--1/12
flex__col--2/3
flex__col--m--1/4
flex__col--l--5/12
```

### Offsets
Offset classes are very similar to column classes, you just have to use *offset* modifier:

`flex__col--offset--fraction`

or:

`flex__col--offset--size--fraction`


For example:
```
flex__col--offset--1/6
flex__col--offset--m--7/12
```

### SASS Variables
If you are using SASS you can adjust few parameters using variables:
* number of columns (default: 12)
* columns margin (default: 1%)
* breakpoints (default: m - 600px, l - 900px) - you can not only change existing breakpoints but even add your own

### Example
```
<div class="flex">
    <div class="flex__col--1/2 flex__col--m--1/3 flex__col--l--1/6">col</div>
    <div class="flex__col--1/2 flex__col--m--1/3 flex__col--l--1/6">col</div>
    <div class="flex__col--1/2 flex__col--m--1/3 flex__col--l--1/6">col</div>
    <div class="flex__col--1/2 flex__col--m--1/3 flex__col--l--1/6">col</div>
    <div class="flex__col--1/2 flex__col--m--1/3 flex__col--l--1/6">col</div>
    <div class="flex__col--1/2 flex__col--m--1/3 flex__col--l--1/6">col</div>
</div>
```
In this example on screen above 900px there will be one row with six columns. Below 900px and above 600px - two rows, three columns in row. Below 600px - three rows, two columns in row.


## Changelog
* v0.3.0 - offset classes, using flex-basis instead of flex due to fewer necessary vendor prefixes
* v0.2.0 - breakpoints defined as map, margins can be defined in any unit
* v0.1.0 - basic grid
