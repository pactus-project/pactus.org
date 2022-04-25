---
title: Transactions fee
---

# Transactions fee

In Zarb, the transaction fee is calculated based on the transferee amount. The formula is quite
simple.

<span v-pre>

$$
fee = value \times percentage
\\
\quad
\\
fee =
\begin{cases}
fee & \\
fee_{min} &  \quad if \quad fee < fee_{min}
\end{cases}
$$

</span>

<span v-pre>$percentage$</span> and <span v-pre>$fee_{min}$</span> are part of
[consensus parameters](../genesis.md).

For example, if Alice is going to send 20,000 to Bob, she should pay 20 coins as a fee for her
transaction.
