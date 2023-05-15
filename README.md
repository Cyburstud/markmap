# markmap Pull Request

This is to suggest modifying how a markdown table is interpretted on the markmap schema. 

## Current Transformation

An example of the current transformation does not logicallly follow the structure of a table and can cause misinterpretation or frustration in how the information was supposed to be expressed. 

```markdown
# People

A simple syntax for a custom object type.

| --- | --- | --- 
| Item | Type | Description |
| --- | --- | --- |
| Name | string | The person's name. |
| Age | integer | The person's age. |
| City | string | The person's current residency of city. |
| State | string | The person's current residency of state. |
| Active | boolean | Is the person an active participant? |

```

![Markmap Example Screenshot](/markmap-screenshot.png "An example of a markmap diagram transforming a table.")

The markmap does separate the table header from the table content however it isn't an appropriate structuring interpretation. Many would argue that it would be better to render the table as an object on the markmap or at the very least incorporate the header labels to the appropriate data entry on each node.

## Suggested Proposal

Provide two (*potentially three*) options for rendering tables in markdown. To keep it consistent with a mindmap structure by default it would be best to render the mark map with appropriate labels as defined by the header row in the table before each data entry.

### Convert `<hr>` elements into labels for each `<td>`

![Markmap Suggested Proposal](/proposed-markmap-label-example.png "Suggested proposal default example.")

To help with style attributes ideally the labels would preferably be a smaller font with itallicized font. A considerable feature might be to display briefly upon the transform animation of the markmap and then transforming the label into an icon that is expandable/displayed upon hover or click.

### Simply render a standard SVG table

A more simplistic approach would be to instead render the table as it initially would be rendered in html syntax.  


| Item | Type | Description |
| --- | --- | --- |
| Name | string | The person's name. |
| Age | integer | The person's age. |
| City | string | The person's current residency of city. |
| State | string | The person's current residency of state. |
| Active | boolean | Is the person an active participant? |

Otherwise to avoid using the `<ForeignObject>` element a table could be made interactive and rendered with SVG. 

### Custom Paginated Row Component

Another potential idea which would be a little more sophisticated would be a custom component that would render either one to a numbrer of records in the table that could cycle through upon user interaction, automatically based on a timer, and/or simply include a summary of the table that expands to one of the previously proposed suggestions. Utilizing the same table reference, one could imagiine that it would visually render to something like this: 