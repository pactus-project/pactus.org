---
id: transaction-fee
title: Transactions fee
---

# Transactions fee

In Zarb transactions fee calculates based on the transferee amount. The formula is quit simple:

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

$percentage$ and $fee_{min}$ are part of [consensus parameters](./learn-genesis.md).

For example if Alice is going to pay 20,000 coins, she should pay 20 coins as fee for this
transaction.

Note: The fee for [Mintbase](transaction-mintbase.md) and [sortition](transaction-sortition.md)
transactions is zero.
