<template>
  <q-page padding>
    <q-input outlined v-model="text" placeholder="Search" stack-label class="full-width q-pb-lg">
      <template v-slot:append>
      <q-icon name="search"  class="cursor-pointer" />
      </template>
    </q-input>
    <div class="row q-gutter-lg">
      <div class="col">
        <q-card class="my-card">

          <q-img src="https://ohridrentacar.com/wp-content/themes/yootheme/cache/slider01-67cc69ca.jpeg" />
        <q-card-section>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Nijat Rent a Car
            </div>
          </div>

          15 <q-icon :name="laPercentageSolid" size="22px" color="primary"></q-icon> Discount
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Car retail
          </div>
          <div class="text-caption text-grey">
            A car dealership or vehicle local distribution is a business that sells new or used cars.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary">
            Reserve
          </q-btn>
        </q-card-actions>
      </q-card></div>
      <div class="col">   <q-card class="my-card">

        <q-img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFhUXGBgYFxgXGB0YGhoYFxgXFxgYGRgZHiggGB0lHxYVIjEhJikrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGislHyUrLS0tLS0tLS0tLS0vLS01LSstLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKQBNAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUBBwj/xABEEAACAQIEBAQEAwQIBQMFAAABAhEAAwQSITEFBkFREyJhcTKBkaEUQlIHI7HBFTNygpLR4fAWJGLS8VOTwkNjg6Ky/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QALxEAAgICAgEACAYCAwAAAAAAAAECEQMhEjFBBBMiUWGBwfAUQnGhsdEykTNS4f/aAAwDAQACEQMRAD8A9fCnv9qXh+pqQKa7l9aAGeGKWQdqflpQKAGzXKkilFMCL5VzKaliuZfWgCM2/em5RUuX/c1z2oGR1wg+lSkU2KAIsnrXI7VMV9K4VoAhIpuT/ZqaPSuRQBCV71yPSpitNimMiZaaVqXLSy0AQgCllqWKblp2Iiim5alIpEU7AhrhFSkVzLRYEJWuRUsUitOxEJWuZaly1winYEUUgKky0itFgQhenSkE+tS5abFOwIkMajeozb0gVZy0zJRYisykRMfL+dRkVaj0phGoPUbVqxUVGSaVWGQes9a7T5BQWhaWQU+PSux6VymyOBXafUd26F3NAHYrhBp41pZaAIyK5FSRXIoAZFcIqSK5FADIrhp8VwigCOKUU+KUUAREUiKkphoAYRXIp+WukUDIstcIqXLTYoAiiuRUsVzLTsCILTSKliuEUWBERXIqXLXCtMCKKbkqUrSy0WBDlpEVJlpZTTsRFFNK1ic44i74DLhXC3SQJ0OUHeZ+1X+FYtmRQ6MpAALNAkwNRrNFjot0q5+JTOUzDMBqPSg3nvjDqxw4gIyZmdXKFQNYLAaEwes70OQJBjHakVoC5G4hdspbGIYs+ILMmZtkXQQTvoRR6t1TEHemmKhjCmMKsMk0026diKpXvP1pVObVcp2MKYqNr6jrTcDfF22rjZgCPY7V18IkaqD96hfuAdbvK2x17VlcYxtqCl0FNirHTXoVPWuYjhyls1tntv0Jkr8xtFPvYdb9vwsUit91JGxE7VltmkinwHi5LG1cIJmVI/Mvep+YeLNh2tZbZcOSDH5YEyZ6aGgfi3Kr4K6l/DvcCKSbig5oQAkFVb1ABHYz0pv7SuOJdwlonY2/GGVyp1AVYZQZ1cadfWsPJSa8m1jun4Cy9zAAttA0vcbp0E6j31A+dEi3BIXrEx6V4lyLxFL2MzXbtt2t6DIpVGC2wQ8k6tMyP+melGCc0I1sPauL499gF1zDLmyrIHwyJIHeiOQHjDi5jFBiZPpUttpGxHvQ3w/hd9MxVgGbVrjDNr7dB6DSrCWr2xuvdbXVUVU/jp9TW+Znib+WuFahwniDRwI0g13E462nxMPbc/Sm5JK2ZUW3SJCtNbShzjfOljDiWdV7SZY+yjWgbiPO+KxKn8LaMdLlwwJHVUH8San65P8AwV/x/suvR3+bX8/6PW8tIW68y5Z/aLcUm1i1AZQPiMM3TynY+33r0Hh3HbF7RXAb9LaH/X5VpZIt0+zMsUkr8F3JXMlTAUoqhIgyVzJU+WlloAr5KWSp8tLLQBWyVzw6s5aWWgCr4dLw6s5a5loAr+HXPDqzlrN4pdKlQQchOrA/DpIJG8e1Kx0S3SqxJidqGuL8xmzcVcmZHmCjAsAvxsQdIEjrua0+L4i4bbIhUFhCvlzqSRvAMivMuacBevHNiot2EV1tmzCq76KdCfLJ3B31rE50tG4x95R5hfEM923buX4Qu5YWw0kDPbXMp83lYE13F8afwrdwX1KOmQZ7pUnJ5s7DXITBUepFZPBjctpdsm7cS4ueBqbYLZbawUmWaSKtcNxCtbuC6bDuEYFbiZVLqws2W1gGd9Khz339/fxK8fh9/fwG8IduI4hrl0tYtjP5y5IZ/Lktk6DRZ271pcUS8cS2XE22S1CqIOUMVJDE65iNsvr7VQt4FMQn4W1hGATMwNq5OW8UKw7OR4inUyAdwK3+dnW3hrFqzce25cXHRLcuoy5S7QOkx21rV3Fr7+oqp39/QxOV8DjDdwpuXw9oiLTIA6jPrcXYZWgf72r2fA4S0mi/ETrO5rx/B8VfDZFRrXiFiqKUKtCHw1zkaJmLZs3Wtj/iZ7RS5bQu7Ai42ZroW6gIyDoqmCdPeKUfSIpbCWJnoicQstdayHXxFEsvWD19ar/03h8zr4iyhg69doHfWvOcVisRexC3fCfQBxee2pIBTS3FtgQssx17b1mcQ4ExuD93+9kZWRWyNcWR52c9Qc2+kDeBOfxqs0vRZHsdvEIQDmUehIB+dKvHMIuJxGZzbwTkMUJuSDKQCOulKn+MS7X7h+Gb6/g9j5P4s962/iqlrwm8PKu2iqQZMfq7dK3nDH4WA+U/zrzLhvAsOt6btyHbzvF0wxJ8pIY9gB8hXo9i+ioCNthGs/SjBm5rZnPh4PRHexTJOcqe0b/SkClxfLp6HT/xXLfE7L69u6kfxFPOHVjmQwd/T6VTlfTsnVdqgc4vzHZtq9nFW3BykgDzMy7SuUzNec3OU0yhVuXkTKENsXPEDonmZTM5NDoBA376ewY7AJcGW7lM6Dv8juKDOP2hhicty0qJrcJk3Ap1UAT12rkz+tvR14HirYJ8H5YsLioUMrKpznMFALBSAiAebfWe/fbd4BwUYe5c/wCVQHxVuAISLZWIiTp5SM2wGsAdaXLPOWCuoLl+4lpraMXXbPGgy/qncAa6+9AnNvOF7E3GFl3WwwHlOhEgZlJG4msRx5Xts1LLiXSPdbnGLbEIXUNMZQw3ifMRsKsYICSDcX2UjT518x2cSgJz3HadSAdJ9Z3qezxFBtaSe7Emu2Kd3JnM+NUtH0PznxT8Phpt+Z2MAZo2BYme0D714jjudMXdXL4uVTpCCDB6Zt6xm4xcIKghVOhCCNPeqGcjbatSxxk7aNQk4xpMs3rpJkkk+uv3r2bkzhTNhFdUBWAPXQa6V4rYw1y7oik+w0+tGnDuI8StIEtkIoGwcj7A0Tx848Rxm4ytFb9oSZbyiIIzD10O1ZeC45cQKCc4XYN0PcGpOYkxd4h7qSROq6zO5PWsJZ6g0OCapjU2naPcP2ecyeJavXb15glrKCHiBmnY79gB616BhcStxQyEFTsRXy1gMcbZYZQytEq3w6bGO4r0Hkj9oaYS14Ny0zLmJBDTAIGgB6ad+tOK46J5I8t+T2mlQnw/9omBukL4hQkfnUge07USYfG27glHVh3Ug/wrXIi4teCeoTfGYLKwZjza5huAOuk9elQ2OIJcuXLVtvPaZRcUggjOuZYmJBHUSND2rGxePstdIDIHCQIOUhWcFhMqQ0KNJGrUnKhVYQpdBMHQ66GJgGJ0O231FPrHwuNAaZAk+YscvlGYAxp1UakaifShjmTma8rEKcgEiBH1O4OgOtYnlUVbNwxuTpB5nExImnGvOeWuM+PeNy4SMgIEH4pAiY7wTRXgcVcuI+aVyt8R0BHf2pRzqRuWFrZsyK8458x15b9lhnW1qkgqQxZkzSDrGXNttrV/iHHLGHuM5xKrbiCPElg+sFV1ka/woAxHN+EBzXM2IcM2XMkgAmQBm+H33+VRy53JVFMrjxRi7k0TYXmC/h3WLd4MWKi2jC4HzguCTcP7vVgI6Rv2rcRN/EKRcttbVSBkK55tsMocKDAuCD5hrrtsKx7v7QMvwYSzOYsGbUgkRMAaGNN6t4H9pOXC4hbyf8wwH4e5bUAIdZLSemh2M7VLjma6Kc8N9/f7FvCcHyM72Q9vOEIHhkJKFmkAaqNF07kitLCcDKJ+8YXA8q1y6Rba2sMVyIwMCW1za++1ebYnmvGXfjxNwjSIIXb+yBWZiLzOZdmc92JY/U1pejZH3L6/0ZfpONf4x+n9nqlq9hcOZfGWjDBrhTRmfyBVAX8oA1pmL5qwbF3DXLtx1KnKpHXQebykGZ+QmvLUuLOo00mtcsxUEAKu59O1E8Cj23/CEvSW+ooLk5jw83FOGZwwU5i0M2UgwyjQD23+c1UbmhjFqzh0sg+YaE+YArmmRGhj+dR2ra27COQBef8AXp5RtHvWbx/heIshbr5YI8sGZB1rlh6uUuPyVvyWl6yuX06Q7F81YzKIvFRASFgTlnU6bnr8u1D93H3HBW5cuMN4Z2ZfoTFK+XjzKQZ0HpTX2JbT7616GOEYrpHJOUn22RriCNIFKueGhA8x9felVPZ937EuLN7lzA/ibqLdvhAxyh3116KCe817U3i8KTCo2L8S2bi21RkUHIQZMiCSNPSvBcDi8lsFSMyvmg1pcQ4licXD5XaNBBJUei9vlSnFtmuVeD6RtczYQIzeKgyk5hIkdyQKHcb+03B6i22Zvygdf8vnXgBS4w1Uk66bnSqT50YFlZfSCDTUJPti5JeA1xvPGKS5fEsvikRJLMkMWARjqN6wbvE8Qly45ds9wefPqT9als8KvM1u66MqzmBYT8Ou3aqvGOKNfdibY1ghgNPb7VpY0l0HJmrynxO2joj2Fu5rmstEqVgptprrP/mszmridp8RdNm14STlCAyAQIJn3msi4+WN99I0qoTrNOMF2KUn0bHCgbnkUS3aJmtDGYC5bgusA/Sq/AL7WX8hGdl2iYG/yoi4nxa0bGViSzaKOoYCZPpXNlzTjkUUtHZiwwljbbpg4lwA6Ctzl/g3jedx5J0H6j/lQ6DRnxPHjD28OY8kqSJidJ3966znDnhPLFyEPhfuuoBy0/jHA3WAlopB+LMSpBGx7Vm8pc13Ljst4uttxKFjCadBHv1ot4bzhhkvjDtdUliqhdzLEKI77iuPJic9+sLxzOP5APsoTcdGBXKBA/mD1FY/GuCpeBKQLg69/QivSOcVw1sM3iIr2wGIkSA2kEDWDuBXlmH45bF5izZUE5ido6HSoYp5seTjLaOtxw5MXJaYI3FZSVYQQYIpyE9qv81Ym298FCDmQGR160/lbGWxc8NkBJIOadfLrlj17135G4xbSs4oJSlxbop2rhVhPTeeg7x3rY4ZjbinxLZbcDSQoAECSN5g6HeCaucw2kvMzBArZFKrMatIOsQY0+lafK6LYw9tmGZ2bxNMo8onwVYnSZLNp+sA7VJTuNtUwnDfGLsk4PxLF+LctYnNPgpcyv8AGILxlI1CyW8vSY0Eg5+J8d7jHMdCCjbgASPMYygHy7kb+tZvMPM+a89y2WS8FZBABYTrBB0iQJ0Om1LC852jbtm8pe4RF3KAokGA2wDzvGwk7bUuMmrozinGGmFMKhS5oysV3WV20gEfIA661Fj5v6iJhSFkE69ddfnQFxHmC9itActskwijsCQG6sdB6elaPAks+KSLuQyMi59PNOYEtodCBvU8kLWysMlySSNXiNq6gTwzrPmIiT2mPWa1cPxjF2bLA+I5IHlZ9YbdSOhHY+29QYvE2rJttduFNwJBIlQDpkB6RvTcQW+Nc+S8R6gSAQzfpGhPoYowy47iU9JxLq/kAPF8YLjs2UrrsRBHcQKzGBFFXMXCy1zMrbkBvKYzdIP5tj22rmI4FhUxSw2IuYT8zZQlwjLJAkBfi+3rXQpqrOB4pAhJ3rp6Vu2eE2/HCMzNYz6sinOU1OgKjXvp0NXsHy3h3sYnLePjWs1y2IMPZUAkHQQ8sAftIpyyxSsFik9ArpTgI6Vucc4RZSzhWskm46N44mcjgiP7Mgn6Vt8r8CtYiwhukhh4jRvKIQIj1zb1qMlJWjSwyumA9tRudBRRwHg97E2nezbZrdmDebTyjcEgnXQHQTtUnFuEYe0ELliYykAZRoJUx3q1wDip4d+IALxetL4ZGwdSSuYdYJ69qjlfKOuyiwuL8C5pa47hrlt0CQIIKwY003EjWsC5gr7IQM7RqFkmB19q9C4Vz1iXnxntXEvN4hGQZ/EthQiwNI8i6R09TI1zBzPeuFsa1y14l393ct21IyZREGSTsN6hixuC4x8FpLlK5/OgTa45IBzGNI/kK7jbJUhCrIeoeiQcXwYsKwVmvMwLKehG4npTOH8WOKvBr2XJbLNDDQLtBPXpVnKS3WkOPo8Za5bdV/6ChWOopUcLym92Xt28yMZUqdI9O9KtrKmicvRJp1QD27V2CVVo6mDRpy3hHs2M+IZ1j95bQSN/zN/lWvg+JeLZIRHJXcC2xCqBJckCI0jWro4/jDZC/h2KMChkAFgddztpWpSclpEoQSe2YuG5hS0fEFgXHJh8g1YnqKHuPHEYm+XFp0EBgIJyj6aV6OmDuFLRt4O3ZKhhcbPq2m5PQis3iWPuWFNslWuORrOgHTXrW4cq2gkk/JR4HxLEpaIvsAFB3EsRtQ7ir4a06roFOnTSaN+C2LgkXxYgkSWeTrrMAUPc34fDh38O+gmPIAdu/fWr22tk5eEBOPGgqvbykQZB79Iq5jri5dBr7/es2sGJdmzyyF8Ri9wWwqkgt1PYVLzJiVN1PDcMoEyO53rGt0T4PlfLNzFXbVsKFYWy2ZnB6eU6aD71N41z5lY5H6vgkZKvRZypxgXcWyXltlFtkKH28sd9JrI4ologm2gQT5YnUesmijkHlWzcuXLrHMMkZDBEtrqd+lKcecXFG8bcZJma2Od3W1h18ruYCicqztpsNKK8DweCjBra3LbI/n3JBmNParPBMRhMKzCwJcCSCwARh5SoJ3696rcTRr37zEEnMT4KpoRljMOmaOs1zrFFfqWeSb/QpcZ4M2Ja5dXEZrjuWe2q6Rr1Jn4SN+1ZvKXC/wAPiLvii3cVQwIgnIdwF6MT/I1Yscw4a3fulEIBUIW3AaTmX0G2vpWNxvjz3c72otrAEKfi1EMSPlWopuNIw2k7J8cmFv3GYL4TZiTOggwIAGgj2oOuWrlq7IDSraEA669D1oy5d4YMXh7klEKugzBA7MXLGAMyxGTv1rQuY7DWgqC5d8Qz5ntqYGmXTxdIEVWEpRXvJSSfZBcxHjoHS3mJVXjfUEys7iDIMHpS/o/EEQgRWaCoRGHlBGpYsV0HSJOmtGvCsaMRZloFy2Wtsw01Unb0hgPmabjLNzDp/XWsuXMFyEtkIzZSROoBJnWdNBUr5SpmqrZ49xNH8QKSZ2EkHSTpPTUntvVK/hCCoDK7NsFMmdoPY7b0UcXwqHNcDLMu0AMCVOqjoBGwEdKHcMDburcXK3hsG1IgkEHv96rF0Rkths/JDLa8t4G4oJ+ACWgaBpn8sA+poV/B3VuZHUq5AIDDSDrJPaCTXqXDLqYkLcsv5SCJggypggxsf5UFc6YVreODZx/VqenlUZkI03799fauaORuTTO3LgUYKS6L1hW8FGxRS+/m8IsBlCDKGJWILaHUzoBrWzwvihf93cClW09ht02+1ScA4cmJwKZGVmXOBBkSHMCQNJAGh7+k1IvLVyygZyEGRspktGUGCQoMCRv7VnlJypHXGMFC2/7Mbj15U8JXLAJcT4lmVCENEanWD/e3PTKOLf8ADzDBZMEggdZq+nB8Reu2w12wMm3x5ss6sSE85Gad51jYURWOC3Yvq2H8QACM1wjQKMzjMJ+cCrYXx0zhnbukCAxoazatWgMyuJgR8Vu4pJPX4qZj8NbUrbVCAAykgkEk5TmPf2rZz20VLlu2lvzqRlbzCQw19JP2rO4niGYKSGJR4kAT8DRrEkyB361Scm3smoqij/RdwFigXzQSpaSIGh+1E/LHCCp/Elzma3cQoPgEMkFfU5daq8LRls4i+tlllbat4oYh0bMZXvBAmD1G9b3LWIV8LKrljxFIiIOZSdOm4qcpU6LQ2BvObMVF1ZDT0E7jbasSxYuXWtWzc/rLWaT0JBP8q9LweHt4kIl1/M7lmykMDA8wB0CkAajzRr8ornDbeGum6jHKUFlB4ecDQFgDmGpn6VttNCak3owuF8Gwxt2sl4piV87XAJ1H6VbTrvVF+VLZtPb8Rzdc5lMaGTMkdD3rV4u+W2GS7+7RpZTbg+aBObMZWYEe9Tcu8aa6lprqm3dzqq5VOV7bOEBHaJialLLKIo4+XfZhcS5bwtpVRmIZVElDqzHcmdNKxcZgibMWQQC4SZ+IHTU+9eocS4Pg8zMmGLkKXk3XIChS87mdtT0rG4jZVsLkw4NrOFOUXA0sxJIOZZiVIkERIrftdt2EV46JOE8SxVqxati38KAfCTt6iu13hmCxK2wrXG000uqdPcilVlD4GvXPwzzXE464jMtu44Q9AxAIPQ66j0NXsBxrEhSGvuVGoBMgH2NRYXl3F3TKYa8REgm2yg+zMAPvVkcr41dSgt981xP4Ak/amcpuYTHF081xm6kZoWY7DSsDGcQtk5VYfFH3rW4BwlLQP4m6mUnXwyxP3SKKMNxXhWHt+HbsT1JZQxJ7yxqmqF7XuKVi6lq1mOy2yxPq21AXFcRbuP4gcSQBBmdOtF/MPHLdyw62AgBDAgjzQq5jtpsNNaAioIWD0olJeDO12WcJh7dx8tw5YEzO9auA4Hhbl1LZuEBjErqRp0BgVh4a11nWtLBPkdWOoBnXX2Me9TcqDls9ExXCOH27BFvDKcqkMzCXPckyfegfE4QAEW0ciIWFY6dxpWthOP3rltjmkKYhdzGmkb6a1SucWLEyWEbzOlZlmvpF1jS8lrk7gNvFXHTGNcsqihgTCK2sFSX3+Veh4T8DhxFnEIneCJOkdBXlZx6tsw+ZA/jWfiOJKGiT8tf4Uo5Zf9QcYryHnF7WGa3cvIwfEFjFrQq4nQ9CGIjWelY2D5gxtxGS1hgyhoIW0WKE7qsklZ7e9YWExhz2iAYLrr6SKh4rims3CUZ02EqxBOUCCSDuKw/al1s1dR70S377DOGtBZMsCQNR3E6R2qq2JUCPDt7z8Q3/AMVVbVzK63SxMOrTufiBJ16+9G68btvHkb2FsD9U6+J3G/bT1DaUTK9ozuD8edUIAHnfKYGkhAF1E/qMxrFWrnCbt4ls+vWEYwNJ6e2tXjjLNxkt3mZLTgAzKgNqFzFWJGoGv160S2sMmHm4XRlAPhWgzOzlZgEgxlEanTaiPV9G2t09gqL5TMC/xMWMaglsp10+L0rdxGP8VHIRsyoQTBO4yKfnp8hWTy0TdfEm6maHkeUlQd9lGYMJOxGm4q3cw/jWktG5dCKdLecgAgmDqBmynadoGgrPOK02NQk+jBZlZ410BVvUE6nU/Fqv0rNwWEcXiotBgD5gRplMGW67TGx800d4HgeHXMJYMoZ2dzLfAWA0gT5Vj+1Q013ww1xnzOGBiSQoI8xI66SPkfSsxd9bMThx2ylbvth2FxQ6uSD5WZLTIQCCyqRmIMqRPY+83CbbYjFh7zaPBUkrJKiQEBMwCJ26a9a3cDN/w38PMuW2zJpBRxaNwCdNC+b3tirC8EX8UyrKi2QygEgKJ0Uawo02AmBJ7VHLkStFMUG6919GHzSVfLcwguW7ozpfZSVzktlQeU6gQR3jppW9jeLeXILkjwkQrPRRpM/2x967ddZtWmtzcNxgJOmRRcdRBEEQwg9IkGoeYOAOXUJBiJ1iVMkGPzLBAmf9KQyPVLwE8fbsZy3joxtqYMFwOxGUiI9P5V6Rh+LKGfQawToNiAI9vKdK8z5TwBbEWyTBCuRp0Mj5jWt+9fVL11C4nQADuskj384qGdSu17vqdGBRcfaXkrftOxKGzbKKqkXRJCgGDpGnuKy8XifEw1kXhkUNbDPIDgTlza7aHc1W5mum4qpB+NTsDswOoJHaqnF7rNbLAqCCpaf1aEAQSN+h7VbE2obZHKk5ulo1eLc0XbTOGIa2wyqBqANMpJiSYHrvVnkfHeJhrvpcce8i0384+VeVHFF2kwJ37DqSB0+Wlegfs1P/AC97WfOT7aKIP0B071t4uK7I48jlM5wM5QzaKxe7DTJyrmtsdR5T5yR/rWrxfmC1bWc0uUDICM0tr030IgnpQ3wRzcuXbYci5buubcxlAa4wYe0T7E9q1E5eNyS2YT5m8hkMxMwQAG67aa1aMGL1lIp2+Ni7bZGQQUecmhgAMfi66NHTerSczYfw8H4ARXt584mblzJ5l8XoNVBEE/KncR5bt2Ve+viBVXdo1J8sRpOhbbtqRWVw7ly0hVvFgoVaYGoI2aARBmN+tTnjhdyNRnPwbK4y8UmXy5VyGIGQzmWSCDGYiPfSqN7DG0cOzNBzErr0JAOb0Mn61uWbiW/hldhEkpMT8DCAY10qt49m4bvjs117dsZJ94RQJMQZMdJ6TW7i9WFSW2A2I4fed2ZbnlLGJJB3jYadK7TP6de3IlxrPkaBrSoXMw3DyHXDv2gNifFN9FUBcyBJkQwBBJnN8Uk6bbVS4pzXZb8v3oPwieC4/NbYHKejKfKw9DBII6TWXiMOVcrMwYnuOh+Yg/OtbbqzLnxRuYjiBeSq+Wf9aoNdZpHoT8h/v71WDtlCj1n51fwNnIhZt2//AJH+Z/gKJJJWZjJydE/BFYfFsx+2gb7NVBcKBoemn0q7g7xZoiBGw76CaixKedvVifqZ/nS8sU9xTGraAqUCmpXaGSCuzh1t2rOItaZoDgfrH5vnl1pf8H4rHXLt3Ci2bbPrmuBSCRJBXUjWa0+BcIuPw7XKQ2ZrcGT5TMEdDIOlavK3DWuYZMThLqWcRbZkcM0JdUHMA4PWGA9Y6HUNpqX6nQqlBX4Bcfsf4hvNgf8A5G/7KHOKcpYixeW3fCgROZWDKQDrB6H3FfRQ4xaNnxMysY2AAzMNCFDN370F49sNeuG5dwjMxEHMwYQOmScsa9qq1a0Tit7PKsQALmGKEZCRlA/6WAp2Oa2buVrIuEnKAXZfNEzK+mkV6S9vBBlyYK3p+a4tkBdfyqAZPzFV8PxJy6DFDDvbRvK4NpWRAdMitmA00y6bnXrUnCmi3K0zzzgeCGMueBZs27bMDBe8VGnU5t/YAmirEpaw7taxDW7d1BBPxq2mhUxqvY6HX1ouwHH2hktMHbMcpUKEgzGcKp10OgbsKw+Y7TtZbx1sB2uAi7cRBkVQVgKFYEMxO43jfSM5Ypq7NYm06JOB4Gxdc3zDLb/q5XyltdYO+WJgfqBrGTAP4qpcu4lbYQkFULqq54hjm0P/AEx1HXSjjh3KmHfDW7jXIdlB/dvc8Mk7BVLhiDppM1Dg+TTeS2fLbhSHtN4ty2SzFgR++V8w7knfpSWOkq2aeRcm+gSbg6WWLW7rXXcMxY2mtFSP7Rgk5j7R61bw+IuCJmCy7nSfNm0M6GinEciph7L3LMteC7CQrag5QpZiPmTt60K3ONIHFpsPdW6NAmVhJOomF/2Nalmg09Ithkmuy/ZtF0vTaLlLZIKyoViQys5BHlDI5juB20GcfwMXgl1mItvlBYI6hySc0FzIOn+9CfVuXOF2ltZrttS7nNDqGKrEKuo3jU+rHtTeZuHWWsMttLSvoRAVJI6EwO5qmPG1BPyTyTjKdNasFeSwqLl2tpcZFLGcil5XN1jaD6DqATpcRxJOZBOpnOoOs6ACdvLA776Vh8pI1q7c8YeW5pocy6bTpHVvSivheFzYm2GdlsgMsTGUlSAPWSQMx12HaeXNC2dGOXFfAyX4SEw1tynn8wBMiAT01369Rrt1p3D+KIQli9IgEKxloGpA6wNx2jtR7xOwr2/DtvHhgjMQCF9Dpqx7D5xpIPd4OtpxLEqxIDGJUhWM+uw0+kVWvcSjJMhxIt2LovNckOuVF1DkTrl6AFok/wAKq8W4dbDgnXMrkRMzB8pIYRPh7+1YnMOEbxMOCxBXKSCdP65s0Dpt1rb45chrTAgaESfnp9Gc/wB01DNJtr5nRjS3YO3bwOabZ0hRDnYZSN5k6iqPE8PKMFU+XXckwozMT7BSauWrVwEnLpmOsjsIjqZq3wnU3yRtauKZP5nWI19C1Uxq3RLJpNsDOM8PRLzFUNpYHkLZo8oMzPXePWjXlHBXEwzOuU+IZEkiAsidAd4qfiOBtYk4O8UlitvxgdUdUtyCR3kKPUT2omW0qqFUAACABsPQCu1JS7OOKcXaABuCXLWfEWmXxRcLldYys2sfq+KDtuI1rZ4bj86fvQ9pVhmDFAkqQxKk/FB3A1BB0FOxVoF4P+k+o6qdiOoJpYbi63Lmd1Ge2DNtAq21UEAovUkkr5z02ABrd09GONMi41xb8QptggWjIOcwW7EDQqNZn0GmgrEsYm6UENm0g+VToGIJ1BkTH0r0xcRYdFJtg5xIWAzGRt99TsO9A3HcJ+DvDN5bdzMV7DNuhPoY6fmG9SzwdWUwyV0VMXcvgtLCSusKsaAESYrGw1guSxBEKASPKozSAGYDT4dNtvStl+NoU1cHyEbzv0q5wHlN71sX89sZoCrcts4hBlDytxY1zQQJjrrUcabfRfJSXYMY/k1yw8C54iZRDZY+WhI+dKjK9hsLhz4d2xfa5uxw6XVtEn9I8T2pV1HK0jysXzlCz5QcwHYkQY7Tp9BVzH/lbuI+m32gfKssGt3AX1CkXBmQiCP5jsRvIrEtNMxD2k0Z9pcxAG5MVfxrDRR/sDQVJYwAtvmzBkiVb37/AO+tUrrlmLd/4UntirjH4slwp81PxI8xqOxuDUt86/Ks/mBf8fzIpp0U2kXrRM2OWrZe4VJ/dhWdvkNPbWK9S5M5Hs27SX8Sge60MquAVtg6rKndogmZjptJBORMGHDFho7qp/sJ53Hz0X516/guMq6kN0JU9dRVYxWmUjdAtzJwQ4e2LpxV2+pcArmSQpnUFpmDl000NU+H4Hhratb83XOzT81kD7Vv8XwuIuA+E1tl7MZ+zZh9qGLvDeIrp+EssvYGPsrAfamor3G7+JtNhsDag+HhhMwTbnb1K1Ys4zBgHz2l7ZLan7An+FBHEbd62Ab2CtICYBNxwJ3jyt6GqH42NRYw497lxv50OcY6HxsOsZzHg7a5ktNdunyyxhRJAzMTAAG+gJ0qviOOC0Cl3KzZMwUHykzAmQYgxqe5oG/pdycqphu0LbLn7gzWhhfxznRbgPZba22j0GjR8qjOVtNM3GNBNheaL9y9aS3aZbQZcxZNMsgNLnyqIJ0H3ohx+De/dt3bF0pkEFc5FttZnJBE7j2jeKArXDb5YeJJP/Xd83+AAt9qJcBCg21ZcwgMAxz66hQrAMJ7x/q+RpxQZfjAB+8/d6fmIC6dmmPkYNef4jEXDxN5vW1ZXUC3mJLJkkRbjzZkY9dDRDirF5ACL5S5tlyC6NtjJGUj0M1jJwJGvG+xd7rEMWBymR1GWCNh1onjnkSoeOUYN2H+TQEiJA+/8Kr4h7QZUcoGb4VJALRvAOp3obxnEbiKQpJfYTqR6y2pPzrMscHxl0ZnIiZAuSd9zlIMVVwZFUuwpfluwSSEIkzozDX2Bpn9EtaJKCUIghiZAO++49z9emMcNjlEBwf7w/yFTWb2ItWLrX2OadPMIiPTTvUsmJJWVjlfRatYw27aIzKxAAjYEg9T07z3+tWP6JF9QXGh1XKdF9ZjzH3/APPkuL4rdLNK3DcuAG2YMDUyBtEQJPWvQuB8YNu0fMDqNJHsY7moQxeEU9b7zN5i5PvXHtm0FZUGstl8y3XbbtDd6o47lzGOpDW7epnS7tGo0g0fWsT6zJJ+pmq/EseltczyB3g/KtyweWCyrpHizcHui/4H4jKQQAoYlc3Rc6jKIOmsbUUYTgGLtLlVEIPxB2B9yGABB+tZD37acQLLbc2zcGp82jFSwKsSsfF8j7R6ZhuIWnOQN5ugYFZjeJ0b5TRi22E0qB7AcKurYto0B0QKeokCNwKlusygZ4DdYOmmlEV8aEKwDdNmg9NJ16VFw+2zjLeyLc7CQCOhE7e010KO6I8kkBSHPcIUid/lNXbPA7Us2QZmADHuMyyD9PtRRxDDeCpbIDG/TTqayUx2ciBby95P8hVeNdk+V9E2A4cloRbUJ3yiJ943rvGsPbay/wCIXxLaguQRJ8oJkdZ32rQsnNtcT5f6xSuq3Rx/hn+da4oyeP8ALuFwhxQW5bJViRb8xPnYjJKiNInr2NetYcm2qplOUAREaekDah08vXbVxDYC+GCZjMGUEZZVWOXttrG1M5l5jt2YtBmzbEwSYHvq1cycoafZWXGT0FF3FBYzEAkTqRSoHPGsJdCnEKrXAoUkh9RuNl9f40qryfwJ6BbkS3g87/jLJurACgGI9dxRovKfC74/cXnsk6ZWM6HT83+deZ4G/k1G/X2ras4/1rlm3ZvGlR6ZiOE28DZycPwi33jW7dIY67wD/AQK8w43wx0YuyFCxJKlSACe3QVq4PmG9aMo5HpNav8Axu7aXUVx6ilzNPGmqAFDrtTrzbewozu4nA3TL2sp9Kr3+CYO5BS4V96d7sx6pqLSA/PXCaJr3Ka//TvA/Ss7E8sXV2YGtEnjkvAdcnYXJZt9zA+bkO32CfWtPhV7zXh/90n6g/8AZUfBLQRLCyPKAT79PsF+lRcHUi5cnrB+mb/uq5RKkbv4kogae/2qPDcyMDG9VeKNFpR7/wAaHsMTm60woOLvELOIUC9aS4oMgMoImInX3NSYfDYEDTD2V7RbUfyoYwpPhz6xUb3zmAp0goMnw6tpbuKi/wBk6DsAhUH+9mHpT7HBrUQ1wuO3lVf8AAUfIUIpimHU1IeJuv5qXBdhv3h3b4eiiEAH3H8aQwrfrj5f6mgJOZHHWrdvmlxvTFxYUcXAaDIDTJIjX3B3+tea8Rw2Lt3WNrEzbLEqGcqVEyF8wAP1oqPMYcax9Kz8a6XNjFZp+DaMW1xPHj4rYuDuYc//AKz/ABqxa4/iF3wlz+6GH8CKzcbwHMZV6oPwTED4bx+TEfzot+4QULzcw3s3gfe5/rTxzYhHmt3D75iPoRQgeG44bXW/xmnDh/EP/Ub/ABmi/gBucV4ml1fJaJ6QFM+g20FS2uEi5asgqLWUEORpnMggk77GI7CsAcJxx3uN/i/1p68tYpviZz/e/wBaXyGehWMdhbKo1y959CQSIG0iBv8AWqGM5gtX0ayJNtwQx2JHoRqvuKGcJyc/UfWtzCcsld6b5MFSBXhvALV/GXEJupaVSRF1iWMgAlj89KIsfy3Zwyrcti65B8xLs5AytqATA1gf3qi5c4ZfF+4zWmUZiASIkAmI9KPLFkxSjDQ3LZ57g+L5g5/IpAzgiAY2noV8oE/pnrRJw/jQv2gy5G6NswzDQx771tYrhoaSujdx/Osq2p8Tw8jLc/VkOU+7RlP1rFSTGmmjt/iCsuRw6RtDEqPkenpWC3ALOpsXvDJ1hTAn+wwiiLE20UTchO4J0/uk1Dd5fS4JFbjKX6mWog82DxVrUReHceUx9wftVW5x7Lpesuv9pJH12rWxPKl0f1d0j5xWbf4RxBfhu5vc/wCdO/gL5lLE8dtBc1sy06DMV9+orNucfB1a39czf/I1bxWF4gN0VvkprMvLjBvYX/21/wAqLESHmEDZB/gNdqg1/Ff+gv8A7a/5UqXIAZZtqs2rhpUqlIxAu23NPLUqVROhHbbaVKrmuUqGMnXEMNjVm3i370qVI0SDGv8AqP1po4pdB0c0qVaTBlocbvEQWmuJxW5vIpUq2mxGhY4rcyxI71xMe5bpSpU7YUi+MYx7fSmXsQTvFKlWuTCkQTXLx1FKlTTZmh7mpMxgmu0q1eg8me2Oed6ti+281ylRFiY9cQ3epVxb96VKtCJkxr96kPEHHWlSp2IeOI3O9dHE7neu0qdgyUcTud6R4nc/VSpUWFDv6Rufqrp4lc/VXaVMVEbcUufqpjcUu/qpUqVjSIm4lc71GeI3O9KlRYURNxB+9Qvj370qVJsCFsU1KlSpAf/Z" />
        <q-card-section>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Nihad Weddings
            </div>
          </div>

          11 <q-icon :name="laPercentageSolid" size="22px" color="primary"></q-icon> Discount
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Entertainment, Wedding Organizer
          </div>
          <div class="text-caption text-grey">
           Nihad Weddings MMC is responsible for assisting clients in planning entire weddings.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary">
            Reserve
          </q-btn>
        </q-card-actions>
      </q-card></div>
      <div class="col">   <q-card class="my-card">

        <q-img src="https://www.azernews.az/media/2019/01/28/expoturkmm1.jpg" />
        <q-card-section>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Ogtay Khalcha
            </div>
          </div>

          7 <q-icon :name="laPercentageSolid" size="22px" color="primary"></q-icon> Discount
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Carpenter
          </div>
          <div class="text-caption text-grey">
            Provides with handmade, high quality and well designed Azerbaijani Khalchas.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary">
            Reserve
          </q-btn>
        </q-card-actions>
      </q-card></div>
    </div>
  </q-page>
</template>

<script>
import { laPercentageSolid } from '@quasar/extras/line-awesome'

export default {
  // name: 'PageName',
  data () {
    return {
      laPercentageSolid: laPercentageSolid
    }
  }
}
</script>
