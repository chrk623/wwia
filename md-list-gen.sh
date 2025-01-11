#!/bin/bash

TEMPLATES_DIR="templates"
# OUTPUT_FILE="${TEMPLATES_DIR}/README.md"
OUTPUT_FILE="TEMPLATES.md"

# md header
echo "# Available Templates" >$OUTPUT_FILE
echo "" >>$OUTPUT_FILE

create_link() {
    local name=$1
    local path=$2
    echo "- [\`$name\`](/$path)"
}

# templates
echo "## Init Templates" >>$OUTPUT_FILE
echo "" >>$OUTPUT_FILE
if [ -d "$TEMPLATES_DIR/init" ]; then
    for template in $TEMPLATES_DIR/init/*; do
        if [ -d "$template" ]; then
            name=$(basename $template)
            create_link "$name" "$template" >>$OUTPUT_FILE
        fi
    done
fi
echo "" >>$OUTPUT_FILE

# utils
echo "## Utility Templates" >>$OUTPUT_FILE
echo "" >>$OUTPUT_FILE
if [ -d "$TEMPLATES_DIR/utils" ]; then
    for category in $TEMPLATES_DIR/utils/*; do
        if [ -d "$category" ]; then
            category_name=$(basename $category)
            echo "### $category_name" >>$OUTPUT_FILE
            echo "" >>$OUTPUT_FILE
            for util in $category/*.ts; do
                if [ -f "$util" ]; then
                    name=$(basename $util .ts)
                    create_link "$name" "$util" >>$OUTPUT_FILE
                fi
            done
            echo "" >>$OUTPUT_FILE
        fi
    done
fi

echo "generated: $OUTPUT_FILE"
