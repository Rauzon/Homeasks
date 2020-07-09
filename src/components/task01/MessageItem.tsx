import React from "react";
import style from './messages.module.css'

type PropsType = {
    name: string,
    time: string,
    message: string
}

export const MessageItem: React.FC<PropsType> = (props) => {
    return <div className={style.content}>
        <div className={style.content__wrapper}>
            <div className={style.content__wrapper_img}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX////gkVbmn1//16P/4bL/ZHPwVGf9yI7URFrksHtiPzPgklb/2aXlnFvmoF//5LX/XHD/yZ3/7tj/3ablmVLejFDeiUb7zZjfjE3lm1f6w4n82ajeiEVaNSv5Xm7018D78OjSOlb56d3wuoJaNi3twaTzwozlxp30zZzxUGj13MnnpGfyz7P89vLtvZTwxqTtsXe3mHnrs4P67OH5fHH/1Jvlo3LsvJ3il2DosYvFp4VPKCGjhWlsSTvsuI7puob9b3P/l4f/oYv/h4H/bHb/s5PvZ2f/gX7vwcTggYr11tjYU1/snoXdamvkgXbebm3TroSMalLqzKLmi13siGX/wJntd2blg1zmp33/xJrcc1zdW1/dbnvRLUroo6jmlpXVpqjRAAAP50lEQVR4nO2d/VvbthbHSxxCW9s4NJgkM5BAShYI7Ka3BUJZx0vLuq3spWu7tWu7/f//xZX8EsuWZMnSkd37PDs/3LsBmfzhvH19JJs7d6qw4cHB3unZydy2l5aWbHt+cna6NzgYVrK2cRsOTk/sjV6v5/tLqfk++sqGfXI6GNZ9gVo2HJz1EByJljXEudE7+3+l3N2bbxTAkZibJ4fDui+3rB1hPAm6yGy3vz4bHNV90SVs930JPGTuaqOBIL95XPeFS9pgviETnCRhIzR3fXZQ98VL2GGvlPuw2auNRsLYGNQNILDBEsFnL9lcKPJ7KSFmnH7JftydbywIbJuLl/4Cop9xG6ShWB3WDcKxo7PNhK5UjNqNnLnr/6mbhWmDsH6WxMsHaWx998sL1aOTjTDwFMylAJGtf/eFtccD3CDKu4/jwsiNu3VDkYYzUI2P48LQjV9ONh6d9JT5lqg6QyD+t26y2HaRvlblixQbz/qNYd1w2Aab6g5ExudrYLH6BSTj3qaGA7l1Jo3U2lXc6YaYQtmFIeJh7YA6HhS6sHZEXUCxC2tG1AaUcGGjzlzc0wWUcmGNiAO9KirtQoxYS9M40AaUdSFGHFYPeFR6WEFZkZzJmbtaPeFcR6qVdSEScJVr1LOeNiD3poIdpxX3DP0qI19mEsRKq83RhuL9vLILq07FE/0kLOtClIrfVAd4qN3qy5WZ2KqLU5AYLe3CKuP0fR0xiq1f0eTmYFPfhSp8jcqkzVyTTtmFKE4r6fuHvdpcWFGxCX2gB1i2FRJOnJkHBHChaoyGTjS/oQHgQnW+Kpw46GkTqrRCwommM3GuDagTow3z5fRAeQ9tYVp8DeM98b2vS6heR2MzK2yG4YTb5BRfwlyThHs9TcKCvTRpM9owbF0XAgAarTW7ukGq1ygSWze3xa8bpABJiK1vbgSueVcBkYTY3O9MAQ7jE0GqhECAyImmCA97WoQwSYjNmHI7K3moMmvKSUhrhL6p6bDWToU64JT+kqEbjMc6W/bKVaY/9ugvrpshHOj4UJHPdSeeN6bi1FAinmqkoaLedqeB12w2qU8b6ogn6oQSZZT1O+jPmti8Uf6brpkBv3oaigHd2Yj+mtv1QsKmRRGemAA82lQFFJZRd9btUj6MIzR0IvUfMHIHdaDqQwGgi/gCGrA/SvhYYWpEfKuW0mJA1x1ZjkMBuo1JCthsTihCE8V0T42wENBtYD4aEJUYEpCupn0Td8GnSoRFnd6djh3Hspxu/uurkyxf08vrGiO6TUmV8gFx+mE+K+9BFLc5BzIS0ch+sEo75AK6qzg8LRZgWkIJwrysMTLJULj95QBG7gv58oBpD8xavtQY0d4KgKwi47rTxH0MQDpAIwvypcbAhnf5U14sQFQ8uwu8PGB/xghQDqGBlj8s2/BpQHc1jc7QMo3eneYraBFhH77llyXMaVHXbeTwLKtJALru2OMD0oQGdi92yxFmAHHu5fGswBv30x/gJSCXEP6J2oNFHspMohrpY6HIeWMrj2cFZI8rSEAuIbxsG5QgtFO6yHk5PMTX9GauNB8rD+Fl26E8oZ3S0c7DFRRfcwLoSvCxCOHv8k+lCW0X5d1szPJdwuc1p27sP0uCDxH287INXpimsrSA0Pf9JQxncehi/3nBagn/hTYaTd1M74QXpu+LCH1s9nQ2KoKL8g8DhlMJVyb/FuZ5XjAmGA3sXRDC2yfNns+nM4zmRMaDQ+4L4ovFbRD1hxJ88Qebafk1IL0XnvNnyEbYxuNu17IcCo0J6iyuE7VBt8/g84pafvrZmHAKTpg0fH/sZIzhq8nTR7/l23t6lbO+uzpm9Hfvt0dPi9t+M/Z/aPDSezPxYEEcRoC/Pdx6uPXMIvR1yucF0/60ywR5dr61tfW1EDHpMuCD/YUsFQJOHt5H9vB1h8JD1zfpzybMYPRehx/bEgA2FyMb8GlbLEv9kZDw6db9EHHi5PCQdbnlJTgPP7X1VOjEuNqAS++EUMBnWZ1HD6Nr/SaPF14f77q/jgkfyQo4cGEaC++pyIUpoTClsoRbsoTx3A38VE0sS4V1pgLCmRlhGs2Di9PQcYIg8B5tGSaMEhFcmJ4KCeOWnhCe/16K8HfpPIwni+AH+CJZWtQNE8K4ZtwvwYct+tC52POxD8G3EGNZWlBpElnmvcZOPBeW/dx1P8W/mK3X4k/FeQguTOfChp8Kz2/vnz8rCYgRn53f/1biU54b33kBE6aqVEiIm55YRNNX7vHbJfljiTIFlt6LeTA/TB3x1UGYN020NzDhhtCJ1RCmNxfAM+GjdFpqcRCrIUxHUsDSm5gHzzmIVRB6zXTQDDwTPiD2ZeZdJmIFhF5AzKKApXfmmII/Yo1BTROiWjvqE4TAM+HDzN6av3QyphxpljAIxrPMOBFaelPHFHy/l2M0Shisu9TUG1aYMo4p+JUSMo7RwgrTL5AQeCbMOIhROyGs9GZN8usmhBWmjA3gugmBDyswTl5WSkgd3WsAz4RZxxSoiQbryrzmJCi4J/KawUTqlok+6g0sTJnHFPITDdaVTe4h40Eg/PDbMvf1LMKhacI5dfiAsuBeZCzGmA8Z44P5n6WfuQAWpgesA1G+xd1fSi7s4l5iFzhaw/0zL/y/YEJ8Tzzn7rMIIYXpIZNQmIjevYxdXEwiu7jIfkO4V8FKQ1hhyj4fLAxTL0fCMaEPmUEKOxNmnw8W94tAjCeTh6xeASy937NPz+bHUrQTJ2I+cS1Nh08ZA50Jc84H553IyMRAFKgXwgML3oRVZ4CFKe98cD4TGT2xmFHMh4zJBzwT5h0SovYxWNINNT425IWcnmF1+5AQUHrzzwdT41OmOkX9b5KjRI1DbjDuddkxig2QkH+2lEpFngDHOEEQoG6I/ld+7O+x62hUTOGEaeH5YFlEJSsChJTeheeD5QJVEZB+4oskhJsJM2VpijhyDN0peiN+DjZApbfgsTV/3s0ywiB6FrvTp3kIJ72ZwjvDOLMyjPqInhfMCh3YAJXeEo+t+dFzaAWtvxzfRMgHKkylHlvz5yPSkTp8zbEgPushxJP+GZGQ4jt3jvusGTXBZxvgTFj+sTV/Pl5sS6kges3uVJIPVHqXeajLtxdVpzSiF4yYz+XzCOGEabnn1H1/GgdrqZKKq4u0+yKDm5iWfhI/rDql6o1sdTFDWPrBvNCRKyGjZKQG3fwjI1KEUMJU6bUt/lcrK8coWGUi1VpZKRSgXMIhEGHJB/NSQnThqOoI3Yd+jn4kX4oQSpgqvU0hIkSMx4WIId8K9US3JCGUMBXK0iJCDMljDKzoB+hn1uUMTJgqvS+CIGRDOt3km5YyIdRMWOl9EVnClZWvcFJa8WM23fDfU0BVQihhypkHlyPkWZf5ZgU5A5sJK70+SZKwy3y1giwhlDA9UQCUJEw26BQJoV6mpPQaQSnCdCigRggkvdX+KpAEITGHVCOEmgkXzIO1CMktZEVCIGGqIrzFhNkt8noJlWTpkl3Id0wdT1UBhJoJF8+DeTYtxWc5MyVCGOmtRMgP0i7znLiiqIGR3iqy1J9x8Nh8GJF665wMIYz0VpClbMDuceHj+gqIQMK09GvM/Pn4uJtzXai6+XghYvlJDRBhOeHt27Pc6xUEr1ogEJ3ubLUUJNBMuMRrzPxw+0IKh8Po5I/kFxPCHFaQdaGf27lQhbTG0mNvIGEqV2ii6NTESyC7oyQlBa8+BXl3ebEstZfe2PgRE+pFXpqMKCXxgH913lgtggSZCRfJUnvpyfLypa2XfFzI8axx2V5+Mi9gBBGmXELbfoP4lpfb1x1ovBiyc93GCxQwgsyEecI75kN22TECaFmdy2iBNpcRRJiy58EpH7qAriHCtfZiDcTIJIQQpqx5cJh/KeG1oSi9bhOLMBlBhCmD0H67nLGXZsI0CdLE3tKIIDNhWpbaT9rZpdtrJpzofMgv84TKRhBhSslSO/erRUtfmXBi56qdX+gy70OQmXCekAZEiAYALYsCRIg5J4LMhHPzYPsJvS5uieB8nWsGYR4RZCacnQfbb1nrLi8bSETmOu1suQGR3tmG/4a5rgEnMrIwsmzTgHhEb1MYoyEiMCAzC0N7kiEEkN6ZYwr2G966y89hndh5zlupnXEigPTOyFL7+xaPsP0OMhWdd9xfZSvjRICZcPbPWrRaXMQXoIS8VZbRFWSiVF96k8Lb/nO/1drmORGw7fNjdLvV2n9DOBFgJkzOg+0/WgVObN9AIXZu+DGKCP8gCfWlNzkPRmlYiAgkT521IsBW63uSUF+Ykn/lqd9qFSK+4I3sywGye/0CsNWCJSRlqb0frcBLxeWXIIQM4RvZdrT8PkEIMBMm5sH2m32BE9sAXbHzsjhGESHREQFmwoQsDUupaURHCJgppgDClAzSPxaEfES9+31HArC1T6pvbWF6RDULQSq2X2qUG8e65AJup4SZdqFLSE5L42ZR7ERUUddU3dj58IL/nyXWzrQLXWGaIdxuSSGqtv6CRp8BzBBqz4QzspRchR+nuN4oRKpjcaVaDjCjTLWFaWYevC+N+OJdSTc6nZvlAsBM9GTahfZMmCAkmoUoTrEOt8owdtb4NZR2IdkutIUpIbzttznCYsTla0eWsWNdt0sAZtqF9kyYmAeT7VACETNaErtSTqd7VcyXB8y0C21hSsjSTLMQpmLEeLXWKYR0Op0PzwV8uSTERtzma8+EiwmLnYgZ25fXXEiEt3b9QsRHuzDTLrRnwoTw7tMriRFDyKsbq4Mwk31ifPoE/Wv35koCjwVI3j9pS+9NotJQaSiO0wSy/eL59c27tTW809hd+3BzffUSf1Xmw3SMkvdPbl9XmA735hu93L1TecSIMrT4HyQ/xQZMGqLbX58eAuzk7+7NN3s+3Q6l41TLmGvihhjiDfXxIhsenth/fWQuZhiRs+bHv6bfDYD/hsennbvYNOJUxVgxGl7HzidYvDt3fvp8N7EqncjGw/b5J2DCv3fuElaVE7c5eNiJfwMTvrqbtyqcyKEL7RUs4NEOtQIBacqJ21w87ERYwqTQcCgNEXLp7hooNUefPn/mQxoj5OF9/vwJ/k+tHv3wIxfSTJhuc/F+/MHEX4/H9tM/r3ZYkGacyPLgzs6rf6D7RMYedNZuf96hKKshROv+fLvWeWAS8M4DfFPn3PySd6URwrzzfrnBi1umCaNbV+fD7UfSlWYJ0Uofbz848Y10FYTR/fnk9te7CaRBQrTEL7cTYk5QEWF4q95x3kXx+soI4asoNt+hdcgxSHWEyajl9tcdQz7c+fWWMeSpljCCtIo2HJStjac7jBlW5YRW4dECHULOwYd/Cf8l/JewdsJjs4SPj+snhP1LVpR9AYRmAe80aydsGiY8YjmxSsJjU/e+C3vAQKyQ0HCdCe2xRTFWRnhsGS4zsT3IJ2NFhE5TxYH/A+EbpkuD5vx6AAAAAElFTkSuQmCC" alt=""/>
            </div>
            <div className={style.content__wrapper_item}>
                <div className={style.content__wrapper_item_message}>
                    <div className={style.content__wrapper_item_messageName}>
                        <p>{props.name}</p>
                    </div>
                    <div className={style.content__wrapper_item_messageText}>
                        <p>{props.message}</p>
                    </div>
                </div>
                <div className={style.content__wrapper_item_time}>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    </div>
}