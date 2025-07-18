import { useState } from 'react'

export default function StatsPage(){

 
  const [urls] = useState([
    {
      short: 'https://shrtn.me/abc123',
      createdAt: '2025-07-18 10:30',
      expiresAt: '2025-07-18 12:30',
      totalClicks: 3,
      clicks: [
        { time: '10:35', source: 'Chrome', geo: 'Hyderabad' },
        { time: '10:50', source: 'Firefox', geo: 'Mumbai' },
        { time: '11:10', source: 'Mobile Safari', geo: 'Delhi' }
      ]
    },
    {
      short: 'https://shrtn.me/xyz789',
      createdAt: '2025-07-18 09:00',
      expiresAt: '2025-07-18 11:00',
      totalClicks: 1,
      clicks: [
        { time: '09:15', source: 'Edge', geo: 'Bangalore' }
      ]
    }
  ])

  return(
    <div style={{maxWidth:'700px',margin:'20px auto',fontFamily:'sans-sarif'}}>
      <h2>Shortened URL Stats</h2>

      {urls.map((u,i)=>(
        <div key={i} style={{border:'1px solid #ccc',padding:10,marginBottom:15}}>
          <p><b>Short URL:</b> <a href={u.short} target='_blank'>{u.short}</a></p>
          <p><b>Created:</b> {u.createdAt} | <b>Expires:</b> {u.expiresAt}</p>
          <p><b>Total Clicks:</b> {u.totalClicks}</p>

          {/* click details */}
          <div style={{marginTop:10}}>
            <p><b>Click Details:</b></p>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'14px'}}>
              <th>
                <tr style={{background:'#eee'}}>
                  <th style={{border:'1px solid #aaa',padding:'4px'}}>Time</th>
                  <th style={{border:'1px solid #aaa',padding:'4px'}}>Source</th>
                  <th style={{border:'1px solid #aaa',padding:'4px'}}>Location</th>
                </tr>
              </th>
              <tbody>
                {u.clicks.map((c,idx)=>(
                  <tr key={idx}>
                    <td style={{border:'1px solid #aaa',padding:'4px'}}>{c.time}</td>
                    <td style={{border:'1px solid #aaa',padding:'4px'}}>{c.source}</td>
                    <td style={{border:'1px solid #aaa',padding:'4px'}}>{c.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}
