import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Input, Pagination, Stack } from "@mui/material";
import { RiExpandUpDownFill } from "react-icons/ri";
import { RiFilter2Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

function createData(
  id,
  date,
  name,
  shipTo,
  paymentMethod,
  amount,
  city,
  customername,
  value,
  staus
) {
  return {
    id,
    date,
    name,
    shipTo,
    paymentMethod,
    amount,
    city,
    customername,
    value,
    staus,
  };
}

const rows = [
  createData(
    0,
    "",
    <Input type="checkbox" />,
    "data:image/png;base64,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",
    "#TKN20203754",
    "2022-05-04",
    "Lucknow",
    "Abhishek Dikshit",
    "0.00",
    "Pending"
  ),
  createData(
    1,
    "",
    <Input type="checkbox" />,
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX///+NuUhchj6GtThahD6LuESPu0iJt0CHtjuFtTaQvEmLuEWDtDJZhDr3+vL7/fjd6czu9OVVgTScwmTZ58bl7thhiz9PfivS47y61JaZwF6xzoikxnHJ3a7F2qfi7NOhxW2UvVWqyny30pHw9eiEsEbk6998p0Rpk0B1oEOvzYS/155/qkXP4LdYhTOyxKbP2sWnvJlxllSOqXx3mV9JfRXa4tS+zbKJpnJ1l16juZNnj0hMfSOYsIfV381/n2qsw5fjnY/8AAAJVElEQVR4nO2cC5ObNhDHDxQsETB+nB3j9zNJc44vzzZtkzb9/p+qEhjboJXA9iWLM/ubyfTo2TP8b6V9aeHujiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAQ6O9m2+02bmHfxw8inoS+4BLhP/yKGmdceE4G5x3s+3lq5o4IlDRPmlD9ELAI+5aelmGoZHmM369ns6WyZSD4aN3Dvq8nYyGUpnDRS7ZftEzMGQScOTH2rT0JrSWXgsRynl5uE3umBGzxK/ickRIYbtOLjiOO+uQvuHP7G3IhdQR+O73oJQYMlFsNnNbWl5tziXt717NWNgv3KzQOk1jh9MZSoj+/60mJfIV7g9cSSw1OZsF2IjBcS1syKW12l0j0b9rdREoTm+4vWKCci4oRLanQe5A/rLncjrfsbSZyNfKH/cW9CoRhP/s5SHag3I9ii3V716PWaODsL6bsZMEOpf8RyUfk/2W3a0SVoWVeppUI3C/Yu1hkwhrSiDOk+7uaoZTBx/sLueMcb5L9qi+tm+amM5GYuT8W4SeUu7yCSFktS7EjFTXEIbxv1OLcZJ/i4yXjzsvu1xsL/8pqhwW4Pb1I12yqcK7SVE/+a7x81nyxwbjRS1HGObiZO1k9Bfzkt2ofRq14xVmWpkqFbvPxliQmVss8iwrxOYciFQb3vvCOaXjj7TPXbQ5eYdzrZfBTq634cUsmJAWVc0rjtVR4SxJVPDhYrSUvvGMCutmtPKdIqvCGJI6khUQWytUiZWmwb7WHji90gU7jTaJQSvzjJjKAjn8SC1O3Kv/bny0E44Eu70Sh6w4eP37+/uHdl/evXtVY64wfctC7JHHxJu0xB42nKZR2bDa73e5gMPi9vhFSRrlglF1sVA3lCYPxMoW/HRUeGPyBKcJGR5ZNYpddTYVN2kGhLtAdfMFUYUMt0jRH60wnvIpA5zmksPsBW4kJ6UllXbiJx41cVD9bYfNPbCUG1MYLJiNWsvXyCl9ACv/ClmIgTlKW6uoUDUih+4gtBaQ/W54nzqLwW/0iYlttvQsEOg4ksHbhYj5mppTlUoXvsTWdMF87Pr9QnQII+HUKF/019y+2nk1hXZo30/BKeUmJD4WLr9jS9lyrz6jQbWJLS1G10g9SOKhH56bNrlf41qCwHuFiVym3vkxhPaqL4TVRYq/wNaywJuECaCydrfCNwdPUo7ooy0MDjwvmswSfgfWUUeFnbHEJoVWeCJ3VNm53Npsoijad9m7V8DWjmxS6A2xxio0lWHB/NNVnvOaTokSjwm91aEb1jcGCsyE8whYV/yhgmyaxYR3CRWwIFoE/NhlgVvyKWWEdwsUMDhZ82Td+RfNNYJtGUYtw8QAqZA/mb+hpnlFhLcLFPRQOQ9vpvG51sBGVKKxDdeEA8c3f2b6hB9DnBoFSIn6rpgU4GmYdkgFqEbPCAX64AO63ZFptq2/chiEcSoX//iQdZvTaKfDsKwta1maF+OFCr52y0ScDfSgHMirs/v2TdJjRaqfjZFDFL5hLfLcWzahV8YZDc6RPABapRWENwkXR9Xv32kf67XjXa3fS3TkHFqlFofvtZwvSKNZOojATuxlzWRQKWSHyxTRKT/XPUYg+nRFpCvOOND72UgNPhKs55ElNbZpEIXZ1UfSM3iL/68IfwGNQQ8DUpklczTscYQd6hWDB8wmpVuuCWBViVxfFOQSWC4atam04Y4nv1qBVU3Qcfq6qj6o1i60KP2JJ21NchmHe0UB+5TyF7iNydVEMh37+17NKRgTnhTKQzy60jRYWPrCoshONbZpEIe5BsNY1KypMn84rwdjEUHRxq4t5cRWGWsU6tHaMKyj8B0PYAa2V6Osd0ljvcRcVmto0iuZ3BF1HtKZSMS1VbEYlKxWepsnAnRsaFxXyNfSxtf2Y2K4Qd25IayUeH0HI0QPz0QM2gcjVhX5UxuAeRsexbUa7Qsxw0dIDujeCPxrZJFoCPnJ1AZ2smR4LbS3NEu0KMcOFFg4ddSZqaOJGppk+W4nvIlcX4BiGtzQ4P7CPWEEhZjMKaF9LuN6M2n8cjoslClHDhWEMg48M9wQXU7Y2jQIzXIAna0riEt6LMVhMlSpEDBfGAtcT8+pfsLVpFIitmpY5GQvCKfQNcONaS3wXNVx0bBW8PwS+AbrTMoWIrRr7VKIPJeGXKESsLkqmEn3gMH90xszXAbyDYDgcHgn1clg7qnJK2jSJQrRwUTaV6OnH3eDBTKlCtFZN6dMx+ksvILNb2zQKvOqiOMIeeAWjMu20FBq3tbZpEoVYc0NR0dGIaJL3lXo5DK3SUoVo1UVx0ESdrE3ZqRl1VwNtXfM0TQZWuCierCUvUYgm4UFEoL/pCtq65QqxwkUxHIbpCUP/fv+IUBDqySnUHm6UK0SaGyr4xaPFOkMe+ix09KYUXASXKsRypg/5PcVPE9Go34bmg+Fh1JKUBm9uaJFXaOgj5gCTtpIS38VzpoVij5V/A3xEqoJC1/3xaiDyXgNI0TS0Q4CqCnGcaaE6FNap2YQNeNBWSSFK7l2oDv3yPzOcqZe1aRKFKK2aQjjkpW/Pi+GmR1mbRoFzEFwsE8Ca/gTTwzWVFKIMYWprTlhfKhuZGnOlJb6LdRCsxzZPmN9/3OGmcrmKQpzcG7BJ4E8ML+vemY9IKynE6Oxr1WFqxnACzAjLZNykr2ReKANjCNPULPX85SwnstWeWKcxSts0iUKEcFGsDo8E3BeT7a7Xns/b8WzCmL1hVdqmUWB09u3vf/K4EOqxWGF0MGcqROjsQx2Xi7DPmuzB6Ow/wSPcZyjEqC4ueZXQFQoRqgvPP+tdVxaFlUyIUV1E8+l4yfwKvqSECuEQ8SC41d+t77mSebk5KylEfiqh09tOHOFfuGqrKcR/xCtZtSO1Oc8zZ6U2TQ1m9g/04+F94DNe2ZyVFHa7g9+xleXY9GarRljN15YpbHYH3x4/vavju2nlqn0YidK8zdamkaZ7/Pz3+3q8S8lAS63a0OZrDQpT032po+kgNsrXmt5No7dpugNpug/1Nh2EWrVAhpAv8aXpBi/++VLntySXoGcIB4VK3OP3D+/x3zHwBKgMIWDpqk0UKnVfpemwb+xpidpy1Uon9Eaa7s93//4SpgOQq/a/23MpBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQxA3zP0O7p8Cchk1CAAAAAElFTkSuQmCC",
    "#TKN20203753",
    "2022-05-04",
    "Lucknow",
    "Abhishek Dikshit",
    "0.00",
    "Pending"
  ),
  createData(
    2,
    "",
    <Input type="checkbox" />,
    "data:image/png;base64,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",
    "#TKN20203752",
    "2022-05-04",
    "Lucknow",
    "Abhishek Dikshit",
    "0.00",
    "Pending"
  ),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Stack useFlexGap flexDirection={"row"} gap={2} padding={2}>
        <Button
          variant="outlined"
          sx={{ fontSize: 12, color: "#000" }}
          disableRipple
        >
          Import Orders
        </Button>
        <Button disabled sx={{ fontSize: 12 }}>
          Accept
        </Button>
        <Button disabled sx={{ fontSize: 12 }}>
          Print
        </Button>
      </Stack>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Input type="checkbox" />
            </TableCell>
            <TableCell sx={{ fontSize: 13 }}>
              Channel <RiExpandUpDownFill />
              <RiFilter2Fill />
            </TableCell>
            <TableCell sx={{ fontSize: 13 }}>
              Order No <RiExpandUpDownFill />
              <IoSearchSharp />
            </TableCell>
            <TableCell sx={{ fontSize: 13 }}>
              Order Date <RiExpandUpDownFill />
              <IoSearchSharp />
            </TableCell>
            <TableCell sx={{ fontSize: 13 }}>
              City <RiExpandUpDownFill />
            </TableCell>
            <TableCell sx={{ fontSize: 13 }}>
              Customer Name <IoSearchSharp />
            </TableCell>
            <TableCell sx={{ fontSize: 13 }}>
              Order Value <RiExpandUpDownFill />
            </TableCell>
            <TableCell sx={{ fontSize: 13 }}>
              Status <RiExpandUpDownFill />
            </TableCell>
            <TableCell sx={{ fontSize: 13 }}>Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: 12 }}>{row.date}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.name}</TableCell>
              <TableCell>
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    margin: "auto",
                    display: "block",
                  }}
                  src={row.shipTo}
                  alt="logo"
                />
              </TableCell>
              <TableCell sx={{ color: "#2295ff", fontSize: 12 }} align="center">
                {row.paymentMethod}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 12 }}>
                {row.amount}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 12 }}>
                {row.city}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 12 }}>
                {row.customername}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 12 }}>
                {row.value}
              </TableCell>
              <TableCell>
                <p
                  style={{
                    fontSize: 12,
                    backgroundColor: "#f6ffed",
                    color: "#59c623",
                    border: "1px solid #b9eb93",
                    textAlign: "center",
                    padding: "5px",
                    borderRadius: 5,
                  }}
                >
                  {row.staus}
                </p>
              </TableCell>

              <TableCell>
                <select style={{ padding: 4 }}>
                  <option>Actions</option>
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ display: "flex", marginLeft: "auto", marginTop: 3 }}>
        <Pagination count={1} variant="outlined" shape="rounded" />

        <select style={{ padding: 5 }}>
          <option>20/page</option>
        </select>
      </Box>
    </React.Fragment>
  );
}
