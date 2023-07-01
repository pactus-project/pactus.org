# markdownlint rules
# See https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md

all

# Line length
rule 'MD013', :line_length => 120, :ignore_code_blocks => true, :tables => false

# Trailing punctuation in header
rule 'MD026', :punctuation => '.,;:'

# https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md024
rule 'MD024', :allow_different_nesting => true

# First header should be a top level header
exclude_rule 'MD002'

# Inline HTML
exclude_rule 'MD033'

# First line in file should be a top level header
exclude_rule 'MD041'

# Ordered list item prefix
exclude_rule 'MD029'
