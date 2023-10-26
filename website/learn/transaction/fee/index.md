---
layout: learn
title: Transaction Fee
sidebar: Transaction Fee
---

# Transaction Fee

Transaction fees in the Pactus blockchain are calculated using a percentage-based fee model.
The fee is a percentage of the transferred amount, within a minimum and maximum range.
The percentage, minimum fee, and maximum fee parameters are part of the blockchain
[consensus parameters]({{ site.baseurl }}/learn/consensus/parameters/).

The formula to calculate the transaction fee is as follows:

<!--
$$
\begin{align*}
& \textbf{function} \ calculateFee(amount, percentage, fee_{min}, fee_{max}) \\
& \qquad fee \gets amount \times percentage \\
& \\
& \qquad \textbf{if} \ fee < fee_{min} \ \textbf{then} \\
& \qquad \qquad \textbf{return} \ fee_{min} \\
& \\
& \qquad \textbf{if} \ fee > fee_{max} \ \textbf{then} \\
& \qquad \qquad \textbf{return} \ fee_{max} \\
& \\
& \qquad \textbf{return} \ fee \\
& \textbf{end function}
\end{align*}
$$ -->

$$
\begin{align*}
fee = amount \times percentage \\
\\
fee =
\begin{cases}
 & fee_{min} & \textbf{ if } \ fee < fee_{min} \\
  & \\
 & fee_{max} & \textbf{ if } \ fee > fee_{max} \\
 & \\
 & fee & \textbf{otherwise}
 \end{cases}
\end{align*}
$$

## Examples

Currently, the fee fraction or percentage is set to 0.01%, the minimum fee is set to 0.000,001 coin,
and the maximum fee is set to 0.001 coin.

- If Alice wants to transfer 2 coins to Bob, she needs to pay 0.000,2 coins as transaction fee.
- If Alice wants to transfer 0.000,2 coins to Bob, she needs to pay 0.000,001 coins as transaction fee.
- If Alice wants to transfer 20 coins to Bob, she needs to pay 0.001 coins as transaction fee.
