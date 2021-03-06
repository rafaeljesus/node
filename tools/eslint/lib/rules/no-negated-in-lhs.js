/**
 * @fileoverview A rule to disallow negated left operands of the `in` operator
 * @author Michael Ficarra
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow negating the left operand in `in` expressions",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create: function(context) {

        return {

            BinaryExpression: function(node) {
                if (node.operator === "in" && node.left.type === "UnaryExpression" && node.left.operator === "!") {
                    context.report(node, "The 'in' expression's left operand is negated");
                }
            }
        };

    }
};
